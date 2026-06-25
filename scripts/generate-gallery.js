import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public', 'galeria');
const outputFile = path.join(__dirname, '..', 'src', 'data', 'galeria.json');

function generateGallery() {
  console.log('📸 Generando galería de comunidad a partir de imágenes...');
  
  if (!fs.existsSync(publicDir)) {
    console.warn('⚠️ La carpeta public/galeria no existe. Creando JSON vacío.');
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2), 'utf8');
    return;
  }

  const files = fs.readdirSync(publicDir)
    .filter(file => /\.(png|jpe?g|gif|webp)$/i.test(file))
    .sort();

  const galleryImages = files.map(file => {
    // Determine title from filename (remove extension)
    const title = file.replace(/\.[^/.]+$/, "");
    return {
      url: `galeria/${file}`,
      title: title
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(galleryImages, null, 2), 'utf8');
  console.log(`✅ Galería generada exitosamente. ${galleryImages.length} imágenes actualizadas.`);
}

generateGallery();
