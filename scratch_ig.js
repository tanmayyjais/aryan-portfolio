const fs = require('fs');
let content = fs.readFileSync('components/instagram-section.tsx', 'utf8');

const newIg = `const INSTAGRAM_POSTS = [
  { href: "https://www.instagram.com/drishtiikaar/", src: "/media/gallery-final/img_11.jpeg", label: "@drishtiikaar Profile", views: "Profile" },
  { href: "https://www.instagram.com/reel/Ddl80CdRmAo/?stkn=MW1mOWlua2NuN2lvMA==", src: "/media/reels/ten-shot-01.jpg", label: "Composition Study", views: "Reel" },
  { href: "https://www.instagram.com/drishtiikaar/reels/", src: "/media/reels/intellectual-01.jpg", label: "Intellectual Montage", views: "Reel" },
  { href: "https://www.instagram.com/drishtiikaar/reels/", src: "/media/reels/montage-01.jpg", label: "Rhythm Study", views: "Reel" },
  { href: "https://www.instagram.com/drishtiikaar/reels/", src: "/media/photography/editorial-03.jpg", label: "Portrait Series", views: "Reel" },
  { href: "https://www.instagram.com/drishtiikaar/reels/", src: "/media/reels/ten-shot-03.jpg", label: "10 Shot Study", views: "Reel" },
];`;

content = content.replace(/const INSTAGRAM_POSTS = \[[\s\S]*?\];/, newIg);
fs.writeFileSync('components/instagram-section.tsx', content);
