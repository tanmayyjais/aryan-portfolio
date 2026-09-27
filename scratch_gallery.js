const fs = require('fs');
let content = fs.readFileSync('components/gallery-section.tsx', 'utf8');

const newArray = `const ALL_IMAGES = [
  // Portraits
  { src: "/media/gallery-final/img_3.jpg", caption: "Portrait Study 01", category: "Portraits" as Category, exif: "f/1.8 · ISO 200" },
  { src: "/media/gallery-final/img_5.jpeg", caption: "Portrait Study 02", category: "Portraits" as Category, exif: "Editorial" },
  { src: "/media/gallery-final/img_6.jpeg", caption: "Portrait Study 03", category: "Portraits" as Category, exif: "Editorial" },
  { src: "/media/gallery-final/img_7.jpeg", caption: "Portrait Study 04", category: "Portraits" as Category, exif: "Editorial" },
  { src: "/media/gallery-final/img_8.jpeg", caption: "Portrait Study 05", category: "Portraits" as Category, exif: "Editorial" },
  { src: "/media/gallery-final/img_9.jpeg", caption: "Portrait Study 06", category: "Portraits" as Category, exif: "Editorial" },

  // Stills
  { src: "/media/gallery-final/img_1.jpg", caption: "Cinematic Still 01", category: "Stills" as Category, exif: "Frame Study" },
  { src: "/media/gallery-final/img_2.jpg", caption: "Cinematic Still 02", category: "Stills" as Category, exif: "Frame Study" },
  { src: "/media/gallery-final/img_4.jpg", caption: "Cinematic Still 03", category: "Stills" as Category, exif: "Frame Study" },
  { src: "/media/films/focal-void/poster.jpg", caption: "Focal Void Poster", category: "Stills" as Category, exif: "2026" },

  // BTS
  { src: "/media/personal/media__1782677888145.jpg", caption: "On Set", category: "BTS" as Category, exif: "Director" },
  
  // Motion Thumbnails
  { src: "/media/reels/ten-shot-01.jpg", caption: "10 Shot Study", category: "Motion" as Category, exif: "2025" },
  { src: "/media/reels/intellectual-01.jpg", caption: "Intellectual Montage", category: "Motion" as Category, exif: "2025" },
  { src: "/media/reels/montage-01.jpg", caption: "Rhythm Study", category: "Motion" as Category, exif: "2025" },
];`;

content = content.replace(/const ALL_IMAGES = \[[\s\S]*?\];/, newArray);
fs.writeFileSync('components/gallery-section.tsx', content);
