import type {
  AboutBlock,
  ContactLink,
  MediaAsset,
  PortfolioEntry,
} from "@/lib/types";

export const hero = {
  name: "Aryan Kumar",
  role: "Filmmaker / Cinematographer / Editor",
  statement: "Visual studies in stillness, tension, portraiture, and motion.",
  background: {
    src: "/media/photography/editorial-01.jpg",
    alt: "Editorial portrait from Aryan Kumar's photography series",
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
    href: "https://www.youtube.com/watch?v=28RcRST1YJM",
    featured: true,
    thumbnail: {
      src: "/media/films/focal-void/still-01.jpg",
      alt: "Black and white frame from Focal Void",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    media: {
      src: "/media/films/focal-void/still-01.jpg",
      alt: "Black and white frame from Focal Void",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
  },
  {
    id: "ten-shot",
    title: "10 Shot by Aryan Kumar",
    kind: "clip",
    year: "2025",
    role: "Direction / Camera",
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
  },
  {
    id: "intellectual-montage",
    title: "Intellectual Montage",
    kind: "clip",
    year: "2025",
    role: "Direction / Edit",
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
  },
  {
    id: "montage",
    title: "Montage",
    kind: "clip",
    year: "2025",
    role: "Edit / Rhythm",
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
  },
  {
    id: "editorial-01",
    title: "Editorial Portrait 01",
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
  },
  {
    id: "editorial-02",
    title: "Editorial Portrait 02",
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
    title: "Portrait Study 03",
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
  },
  {
    id: "editorial-04",
    title: "Portrait Study 04",
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
  },
  {
    id: "editorial-05",
    title: "Portrait Study 05",
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
  },
];

export const about: AboutBlock = {
  statement:
    "Aryan Kumar is a first-year cinema student at AAFT Delhi, building a practice around image-making, mood, editing rhythm, and minimal setups.",
  education:
    "Asian Academy of Film & Television, Bachelors in Cinema (2028) / Diploma in Mass Communication & Journalism, Uttaranchal University (2025)",
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
