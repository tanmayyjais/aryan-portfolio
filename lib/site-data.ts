import type {
  AboutBlock,
  ContactLink,
  MediaAsset,
  PortfolioEntry,
} from "@/lib/types";

export const hero = {
  name: "Aryan Kumar",
  role: "Cinematographer • Filmmaker • Editor",
  statement: "Capturing raw human emotion through light, shadow, and frame.",
  background: {
    src: "/media/hero/hero-still.jpg",
    alt: "Cinematic portrait from Aryan Kumar's cinematography series",
    type: "image",
    orientation: "portrait",
    width: 1280,
    height: 1706,
    priority: true,
  } satisfies MediaAsset,
};

export const selectedWorks: PortfolioEntry[] = [
  {
    id: "focal-void",
    title: "Focal Void",
    kind: "film",
    year: "2026",
    role: "Director / Cinematography / Edit",
    sourceLabel: "Short Film",
    href: "https://youtu.be/28RcRST1YJM",
    featured: true,
    thumbnail: {
      src: "/media/films/focal-void/still-02.jpg",
      alt: "Frame still from Focal Void showing cinematic lighting",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    media: {
      src: "/media/films/focal-void/still-02.jpg",
      alt: "Frame still from Focal Void showing cinematic lighting",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    synopsis: "A psychological study of isolation and visual tension. A story told in high-contrast frames where stillness speaks louder than movement. Explores the thin line between reality and mental projections.",
    credits: [
      { label: "Writer & Director", value: "Aryan Kumar" },
      { label: "Cinematographer", value: "Aryan Kumar" },
      { label: "Editor", value: "Aryan Kumar" },
      { label: "Production House", value: "AAFT Delhi" },
    ],
    specs: "Sony Mirrorless • 24mm Prime Lens • DaVinci Resolve color grade",
  },
  {
    id: "ten-shot",
    title: "10 Shot study",
    kind: "clip",
    year: "2025",
    role: "Direction / Camera / Grade",
    sourceLabel: "Motion Study",
    thumbnail: {
      src: "/media/reels/ten-shot-01.jpg",
      alt: "Preview still from 10 Shot by Aryan Kumar",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    media: {
      src: "/media/reels/ten-shot-preview.mp4",
      alt: "Motion clip from 10 Shot by Aryan Kumar",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
      poster: "/media/reels/ten-shot-01.jpg",
      previewSrc: "/media/reels/ten-shot-preview.mp4",
    },
    synopsis: "Ten carefully structured static and dynamic frames exploring architectural geometry, lighting gradients, and spatial orientation. An investigation into structural composition.",
    credits: [
      { label: "Cinematographer", value: "Aryan Kumar" },
      { label: "Editor & Colorist", value: "Aryan Kumar" },
    ],
    specs: "Sony Mirrorless • 50mm f/1.8 Lens • 4K 24fps",
  },
  {
    id: "intellectual-montage",
    title: "Intellectual Montage",
    kind: "clip",
    year: "2025",
    role: "Direction / Edit / Assembly",
    sourceLabel: "Montage Study",
    thumbnail: {
      src: "/media/reels/intellectual-02.jpg",
      alt: "Night frame from Intellectual Montage",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    media: {
      src: "/media/reels/intellectual-preview.mp4",
      alt: "Motion clip from Intellectual Montage",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
      poster: "/media/reels/intellectual-02.jpg",
      previewSrc: "/media/reels/intellectual-preview.mp4",
    },
    synopsis: "An editing exercise juxtaposing contrasting images to create a distinct emotional resonance, drawing inspiration from Soviet montage theory and intellectual associations.",
    credits: [
      { label: "Concept & Edit", value: "Aryan Kumar" },
      { label: "Footage Assembly", value: "Aryan Kumar" },
    ],
    specs: "Adobe Premiere Pro • Mixed Media Assets",
  },
  {
    id: "montage",
    title: "Montage",
    kind: "clip",
    year: "2025",
    role: "Edit / Rhythm / Pace",
    sourceLabel: "Mood Exercise",
    thumbnail: {
      src: "/media/reels/montage-02.jpg",
      alt: "Interior still from Montage",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    media: {
      src: "/media/reels/montage-preview.mp4",
      alt: "Motion clip from Montage",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
      poster: "/media/reels/montage-02.jpg",
      previewSrc: "/media/reels/montage-preview.mp4",
    },
    synopsis: "A rapid-paced visual sequence focusing on movement speed, light shifts, and the rhythm of cutting on action. A study on how temporal pacing dictates narrative tension.",
    credits: [
      { label: "Editor", value: "Aryan Kumar" },
    ],
    specs: "Adobe Premiere Pro • Color Graded in Premiere",
  },
  {
    id: "editorial-01",
    title: "Editorial portrait 01",
    kind: "photo",
    year: "2025",
    role: "Photography",
    sourceLabel: "Portrait Study",
    thumbnail: {
      src: "/media/photography/editorial-01.jpg",
      alt: "Editorial portrait photographed by Aryan Kumar",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    media: {
      src: "/media/photography/editorial-01.jpg",
      alt: "Editorial portrait photographed by Aryan Kumar",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    exif: "Prime Lens • f/1.8 • 1/160s • ISO 200",
  },
  {
    id: "editorial-02",
    title: "Editorial portrait 02",
    kind: "photo",
    year: "2025",
    role: "Photography",
    sourceLabel: "Portrait Study",
    thumbnail: {
      src: "/media/photography/editorial-02.jpg",
      alt: "Studio portrait with blazer draped over a chair",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    media: {
      src: "/media/photography/editorial-02.jpg",
      alt: "Studio portrait with blazer draped over a chair",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    exif: "Prime Lens • f/2.0 • 1/200s • ISO 400",
  },
];

export const motionClips: PortfolioEntry[] = selectedWorks.filter(
  (entry) => entry.kind === "clip"
);

export const stills: PortfolioEntry[] = [
  selectedWorks[4],
  selectedWorks[5],
  {
    id: "editorial-03",
    title: "Portrait study 03",
    kind: "photo",
    year: "2025",
    role: "Photography",
    sourceLabel: "Portrait Study",
    thumbnail: {
      src: "/media/photography/editorial-03.jpg",
      alt: "Portrait study photographed by Aryan Kumar",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    media: {
      src: "/media/photography/editorial-03.jpg",
      alt: "Portrait study photographed by Aryan Kumar",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    exif: "Prime Lens • f/2.2 • 1/160s • ISO 320",
  },
  {
    id: "editorial-04",
    title: "Portrait study 04",
    kind: "photo",
    year: "2025",
    role: "Photography",
    sourceLabel: "Portrait Study",
    thumbnail: {
      src: "/media/photography/editorial-04.jpg",
      alt: "Relaxed portrait with a chair foreground",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    media: {
      src: "/media/photography/editorial-04.jpg",
      alt: "Relaxed portrait with a chair foreground",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    exif: "Prime Lens • f/1.8 • 1/250s • ISO 100",
  },
  {
    id: "editorial-05",
    title: "Portrait study 05",
    kind: "photo",
    year: "2025",
    role: "Photography",
    sourceLabel: "Portrait Study",
    thumbnail: {
      src: "/media/photography/editorial-05.jpg",
      alt: "Portrait with folded arms and soft side light",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    media: {
      src: "/media/photography/editorial-05.jpg",
      alt: "Portrait with folded arms and soft side light",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
    exif: "Prime Lens • f/1.8 • 1/160s • ISO 250",
  },
  {
    id: "fashion-01",
    title: "Fashion Study 01",
    kind: "photo",
    year: "2026",
    role: "Photography",
    sourceLabel: "Editorial",
    thumbnail: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2108 (1) (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 },
    media: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2108 (1) (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 }
  },
  {
    id: "fashion-02",
    title: "Fashion Study 02",
    kind: "photo",
    year: "2026",
    role: "Photography",
    sourceLabel: "Editorial",
    thumbnail: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2147 (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 },
    media: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2147 (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 }
  },
  {
    id: "fashion-03",
    title: "Fashion Study 03",
    kind: "photo",
    year: "2026",
    role: "Photography",
    sourceLabel: "Editorial",
    thumbnail: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2152 (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 },
    media: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2152 (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 }
  },
  {
    id: "fashion-04",
    title: "Fashion Study 04",
    kind: "photo",
    year: "2026",
    role: "Photography",
    sourceLabel: "Editorial",
    thumbnail: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2157 (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 },
    media: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2157 (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 }
  },
  {
    id: "fashion-05",
    title: "Fashion Study 05",
    kind: "photo",
    year: "2026",
    role: "Photography",
    sourceLabel: "Editorial",
    thumbnail: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2176 (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 },
    media: { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2176 (1).jpeg", alt: "Fashion portrait", type: "image", orientation: "portrait", width: 1280, height: 1706 }
  },
  {
    id: "personal-01",
    title: "Cinematographer Portrait",
    kind: "photo",
    year: "2026",
    role: "Photography",
    sourceLabel: "Personal",
    thumbnail: { src: "/media/personal/media__1782677888107.jpg", alt: "Cinematographer Aryan Kumar", type: "image", orientation: "portrait", width: 1280, height: 1706 },
    media: { src: "/media/personal/media__1782677888107.jpg", alt: "Cinematographer Aryan Kumar", type: "image", orientation: "portrait", width: 1280, height: 1706 }
  },
  {
    id: "personal-02",
    title: "Cinematographer BTS",
    kind: "photo",
    year: "2026",
    role: "Photography",
    sourceLabel: "BTS",
    thumbnail: { src: "/media/personal/media__1782677888145.jpg", alt: "Behind the scenes camera rig", type: "image", orientation: "landscape", width: 1920, height: 1080 },
    media: { src: "/media/personal/media__1782677888145.jpg", alt: "Behind the scenes camera rig", type: "image", orientation: "landscape", width: 1920, height: 1080 }
  },
  {
    id: "drive-bts-01",
    title: "Behind the Lens",
    kind: "photo",
    year: "2024",
    role: "Photography",
    sourceLabel: "BTS",
    thumbnail: { src: "/media/drive_new/roots/IMG_20241026_031024.jpg", alt: "Aryan Kumar BTS", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    media: { src: "/media/drive_new/roots/IMG_20241026_031024.jpg", alt: "Aryan Kumar BTS", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    exif: "Sony · f/2.0 · BTS"
  },
  {
    id: "drive-bts-02",
    title: "On Set",
    kind: "photo",
    year: "2024",
    role: "Photography",
    sourceLabel: "BTS",
    thumbnail: { src: "/media/drive_new/roots/IMG_20241026_031132.jpg", alt: "On set moment", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    media: { src: "/media/drive_new/roots/IMG_20241026_031132.jpg", alt: "On set moment", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    exif: "BTS · 2024"
  },
  {
    id: "drive-bts-03",
    title: "The Frame",
    kind: "photo",
    year: "2024",
    role: "Photography",
    sourceLabel: "BTS",
    thumbnail: { src: "/media/drive_new/roots/IMG_20241026_031408.jpg", alt: "Production frame", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    media: { src: "/media/drive_new/roots/IMG_20241026_031408.jpg", alt: "Production frame", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    exif: "BTS · 2024"
  },
  {
    id: "drive-bts-04",
    title: "Street Light",
    kind: "photo",
    year: "2024",
    role: "Photography",
    sourceLabel: "Street",
    thumbnail: { src: "/media/drive_new/roots/IMG_20241026_031603.jpg", alt: "Street scene", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    media: { src: "/media/drive_new/roots/IMG_20241026_031603.jpg", alt: "Street scene", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    exif: "ISO 800 · f/2.8"
  },
  {
    id: "drive-bts-05",
    title: "Natural Light",
    kind: "photo",
    year: "2024",
    role: "Photography",
    sourceLabel: "Documentary",
    thumbnail: { src: "/media/drive_new/roots/IMG_20241026_031722.jpg", alt: "Documentary still", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    media: { src: "/media/drive_new/roots/IMG_20241026_031722.jpg", alt: "Documentary still", type: "image", orientation: "portrait", width: 1080, height: 1440 },
    exif: "Natural Light · 2024"
  },
  {
    id: "drive-bts-06",
    title: "Motion Study",
    kind: "photo",
    year: "2024",
    role: "Photography",
    sourceLabel: "Candid",
    thumbnail: { src: "/media/drive_new/roots/Picsart_24-10-26_06-56-48-427.jpg", alt: "Edited portrait", type: "image", orientation: "portrait", width: 1080, height: 1350 },
    media: { src: "/media/drive_new/roots/Picsart_24-10-26_06-56-48-427.jpg", alt: "Edited portrait", type: "image", orientation: "portrait", width: 1080, height: 1350 },
    exif: "Edited · 2024"
  }
];

export const about: AboutBlock = {
  statement:
    "A student cinematographer sculpting stories out of light, shadow, and frame — currently training at AAFT Noida.",
  education:
    "Asian Academy of Film & Television (AAFT), Noida — BSc Cinematography (2025 - Present) / Uttaranchal University — Diploma in Mass Communication & Journalism (2022 - 2025)",
  experience: [
    {
      title: "Lead Photographer / UU Fest",
      meta: "2025",
    },
    {
      title: "Lead Cameraperson / Times Of Uttaranchal",
      meta: "2024 - 2025",
    },
  ],
};

export const services = [
  {
    id: "direction",
    title: "Direction",
    description: "Developing visual concepts, storyboards, and blocking styles. Organizing thematic mood boards and translating textual beats into distinct emotional rhythms on set.",
    gear: "Treatment Decks • Moodboards • Screenplay Assembly • Shot-listing",
  },
  {
    id: "cinematography",
    title: "Cinematography",
    description: "Sculpting light, deciding spatial composition, lens selection, camera setups, and fluid motion. Expert in high-contrast low-light atmospheres and color theory.",
    gear: "Sony Mirrorless Setups • Prime Lenses (24mm, 35mm, 50mm, 85mm) • Gimbals & Rigging",
  },
  {
    id: "editing",
    title: "Editing",
    description: "Pacing narrative beats, rhythmic montage assembly, sound design layering, and precise color grading to evoke character psychology.",
    gear: "DaVinci Resolve Studio • Adobe Premiere Pro • After Effects • Audition",
  },
  {
    id: "writing",
    title: "Writing",
    description: "Crafting atmospheric screenplay structures, character arcs, and punchy thematic concepts designed for visual-first storytelling.",
    gear: "Final Draft • Celtx • Visual Treatment Outlines",
  },
];

export const contact = {
  email: "aryannkumar29@gmail.com",
  phone: "+91 9140388117",
  instagram: "https://www.instagram.com/drishtiikaar/",
  youtube: "https://www.youtube.com/@aaryannnk",
  linkedin: "https://www.linkedin.com/in/aryannkumar/",
  resume: "/media/resume/aryan-kumar-resume.pdf",
};

export const socialLinks: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    value: contact.email,
  },
  {
    label: "Instagram",
    href: contact.instagram,
    value: "@drishtiikaar",
  },
  {
    label: "YouTube",
    href: contact.youtube,
    value: "DRYSHTIKAAR",
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    value: "aryannkumar",
  },
  {
    label: "Resume",
    href: contact.resume,
    value: "Download CV",
  },
];
