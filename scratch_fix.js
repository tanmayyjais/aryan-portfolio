const fs = require('fs');
let content = fs.readFileSync('components/gallery-section.tsx', 'utf8');

// Fix aspect ratio based on category instead of file name
content = content.replace(
  /style={{ aspectRatio: img.src.includes\("editorial"\) \? "3\/4" : "16\/10" }}/,
  'style={{ aspectRatio: img.category === "Portraits" ? "3/4" : "16/10" }}'
);

// Remove grayscale
content = content.replace(
  /className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 \\n?ease-\[cubic-bezier\(0\.43,0\.13,0\.23,0\.96\)\] group-hover:scale-105"/,
  'className="object-cover transition-all duration-700 ease-[cubic-bezier(0.43,0.13,0.23,0.96)] group-hover:scale-105"'
);
content = content.replace(
  /className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-\[cubic-bezier\(0\.43,0\.13,0\.23,0\.96\)\] group-hover:scale-105"/,
  'className="object-cover transition-all duration-700 ease-[cubic-bezier(0.43,0.13,0.23,0.96)] group-hover:scale-105"'
);

fs.writeFileSync('components/gallery-section.tsx', content);
