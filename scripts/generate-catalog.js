import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public', 'productos');
const outputFile = path.join(__dirname, '..', 'src', 'data', 'productos.json');

// Helper to determine category based on folder name keywords
function guessCategory(folderName) {
  const name = folderName.toLowerCase();
  if (name.includes('button') || name.includes('botones')) return 'Repuestos';
  if (name.includes('sanwa') && name.includes('jlf')) return 'Joysticks';
  if (name.includes('sanwa') && name.includes('combo')) return 'Repuestos';
  if (name.includes('brook')) return 'Tecnología';
  if (name.includes('hitbox') || name.includes('haute') || name.includes('cosmox') || name.includes('sapphire')) return 'Hitbox';
  return 'Otros';
}

function generateCatalog() {
  console.log('🔄 Generando catálogo de productos a partir de carpetas...');
  
  let existingProducts = [];
  if (fs.existsSync(outputFile)) {
    try {
      const data = fs.readFileSync(outputFile, 'utf8');
      existingProducts = JSON.parse(data);
    } catch (e) {
      console.warn('⚠️ No se pudo leer el archivo productos.json existente. Se generará uno nuevo.');
    }
  }

  if (!fs.existsSync(publicDir)) {
    console.error('❌ Error: El directorio public/productos no existe.');
    process.exit(1);
  }

  const directories = fs.readdirSync(publicDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const newProducts = directories.map(dirName => {
    const dirPath = path.join(publicDir, dirName);
    const files = fs.readdirSync(dirPath)
      .filter(file => /\.(png|jpe?g|gif|webp)$/i.test(file))
      .sort(); // Sort so they appear in consistent order

    // Generate stable ID from folder name
    const id = dirName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Find if this product existed in previous JSON to preserve category/instagram if manually set
    // In previous versions, products matched roughly by name or we can just try to match part of the name
    // Since names changed, we rely on the helper first, but fallback to existing if we can somehow match it.
    // Actually, comparing by ID is safest since we generate it deterministically.
    const existing = existingProducts.find(p => p.id === id || p.nombre === dirName);

    return {
      id: id,
      nombre: dirName,
      categoria: existing?.categoria || guessCategory(dirName),
      imagenes: files.map(f => `productos/${dirName}/${f}`),
      // Keep old single 'imagen' property temporarily pointing to the first image for backwards compatibility during migration if needed.
      imagen: files.length > 0 ? `productos/${dirName}/${files[0]}` : '', 
      instagram: existing?.instagram || "https://www.instagram.com/neogearcba/"
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(newProducts, null, 2), 'utf8');
  console.log(`✅ Catálogo generado exitosamente. ${newProducts.length} productos actualizados.`);
}

generateCatalog();
