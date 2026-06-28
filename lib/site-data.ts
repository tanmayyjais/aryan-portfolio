import type {
  BioBlock,
  ContactLink,
  FeaturedFilm,
  FilmEntry,
  MediaAsset,
  PhotoEntry,
  ReelEntry,
  ServiceEntry,
} from "@/lib/types";

export const hero = {
  name: "Aryan Kumar",
  role: "Filmmaker / Cinematographer / Visual Storyteller",
  statement:
    "Emerging from AAFT Delhi with a strong instinct for mood, detail, and visual tension, Aryan builds stories through light, silence, texture, and carefully observed human moments.",
  background: {
    src: "/media/hero/hero-still-alt.jpg",
    alt: "Black and white still from Focal Void showing a lone figure at a desk",
    type: "image",
    orientation: "landscape",
    width: 1920,
    height: 1080,
    priority: true,
  } satisfies MediaAsset,
  stats: [
    { label: "Flagship Film", value: "Focal Void" },
    { label: "Visual Studies", value: "03" },
    { label: "Editorial Frames", value: "05" },
  ],
};

export const featuredFilm: FeaturedFilm = {
  title: "Focal Void",
  year: "2026",
  runtime: "2m 47s",
  logline:
    "A young filmmaker slips into obsession, isolation, and creative pressure while trying to make something that matters.",
  description:
    "Focal Void is a psychological indie short built around ambition, artistic loneliness, and the emotional cost of image-making. The presentation here leads with stark monochrome stills, tactile darkness, and a restrained sense of dread to reflect the film's inner spiral.",
  role: "Director / Cinematography / Editing",
  embedUrl: "https://www.youtube.com/embed/28RcRST1YJM",
  poster: {
    src: "/media/films/focal-void/poster.jpg",
    alt: "Poster thumbnail for Focal Void short film",
    type: "image",
    orientation: "landscape",
    width: 1920,
    height: 1080,
  },
  stills: [
    {
      src: "/media/films/focal-void/still-01.jpg",
      alt: "Focal Void still featuring the protagonist in black and white",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
      caption: "Isolation settles in before the breakdown becomes visible.",
    },
    {
      src: "/media/films/focal-void/still-02.jpg",
      alt: "Desk lamp silhouette from Focal Void with quote overlay",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
      caption: "A memorable internal line becomes part of the visual language.",
    },
    {
      src: "/media/films/focal-void/still-03.jpg",
      alt: "Backlit desk silhouette still from Focal Void",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
      caption: "Monochrome contrast and a single practical source define the mood.",
    },
  ],
  credits: [
    "Director: Aryan A Gupta",
    "Cinematography: Aryan A Gupta",
    "Editing: Aryan A Gupta",
    "Sound Design: Samaksh Gupta",
    "Starring: Shreyansh Kumar Singh",
    "Genre: Psychological Drama / Indie Short",
  ],
};

export const filmography: FilmEntry[] = [
  {
    title: "Focal Void",
    year: "2026",
    format: "Psychological Short Film",
    note: "Flagship narrative work and central case study of the site.",
  },
  {
    title: "10 Shot by Aryan Kumar",
    year: "2025",
    format: "Visual Exercise",
    note: "A stylized study in tension, framing, and expressive light falloff.",
  },
  {
    title: "Intellectual Montage",
    year: "2025",
    format: "Montage Study",
    note: "Night-time atmosphere built through detail cuts, skyline tension, and rhythm.",
  },
  {
    title: "Montage",
    year: "2025",
    format: "Mood-driven Edit",
    note: "Minimal setting, close observation, and emotional interiority through cuts.",
  },
];

export const visualNarratives: ReelEntry[] = [
  {
    title: "10 Shot by Aryan Kumar",
    platform: "Drive Archive",
    url: "https://drive.google.com/drive/folders/1_R5qxLDb6EsGtacfbZHdxo3qvjZACGtT?usp=drive_link",
    format: "Shot Exercise",
    caption:
      "A warm, tension-led study in close framing, shadow carving, and controlled movement.",
    highlight: "Shot design / low-key lighting / visual tension",
    thumbnail: {
      src: "/media/reels/ten-shot-01.jpg",
      alt: "Preview frame from 10 Shot by Aryan Kumar",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    preview: {
      src: "/media/reels/ten-shot-preview.mp4",
      alt: "Loop preview from 10 Shot by Aryan Kumar",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
      poster: "/media/reels/ten-shot-01.jpg",
    },
  },
  {
    title: "Intellectual Montage",
    platform: "Drive Archive",
    url: "https://drive.google.com/drive/folders/1_R5qxLDb6EsGtacfbZHdxo3qvjZACGtT?usp=drive_link",
    format: "Montage Study",
    caption:
      "A rooftop night sequence shaped around atmosphere, urban glow, and reflective pause.",
    highlight: "Montage rhythm / city texture / contemplative pacing",
    thumbnail: {
      src: "/media/reels/intellectual-02.jpg",
      alt: "Preview frame from Intellectual Montage",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    preview: {
      src: "/media/reels/intellectual-preview.mp4",
      alt: "Loop preview from Intellectual Montage",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
      poster: "/media/reels/intellectual-02.jpg",
    },
  },
  {
    title: "Montage",
    platform: "Drive Archive",
    url: "https://drive.google.com/drive/folders/1_R5qxLDb6EsGtacfbZHdxo3qvjZACGtT?usp=drive_link",
    format: "Mood Exercise",
    caption:
      "An intimate room-based edit where the rhythm comes from silence, routine, and emotional pressure.",
    highlight: "Interior mood / detail cutaways / emotional rhythm",
    thumbnail: {
      src: "/media/reels/montage-02.jpg",
      alt: "Preview frame from Montage",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    preview: {
      src: "/media/reels/montage-preview.mp4",
      alt: "Loop preview from Montage",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
      poster: "/media/reels/montage-02.jpg",
    },
  },
];

export const photographySeries: PhotoEntry[] = [
  {
    title: "Editorial Portrait 01",
    caption: "Sharp tailoring, controlled expression, and clean window-shaped falloff.",
    asset: {
      src: "/media/photography/editorial-01.jpg",
      alt: "Editorial portrait photographed by Aryan Kumar",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
  },
  {
    title: "Editorial Portrait 02",
    caption: "A quieter pose with direct eye-line and sculpted negative space.",
    asset: {
      src: "/media/photography/editorial-02.jpg",
      alt: "Studio portrait with blazer draped over a chair",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
  },
  {
    title: "Portrait Study 03",
    caption: "The frame softens into observation rather than performance.",
    asset: {
      src: "/media/photography/editorial-03.jpg",
      alt: "Portrait study photographed by Aryan Kumar",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
  },
  {
    title: "Portrait Study 04",
    caption: "A candid smile shifts the energy from formal to personal.",
    asset: {
      src: "/media/photography/editorial-04.jpg",
      alt: "Relaxed portrait with a chair foreground",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
  },
  {
    title: "Portrait Study 05",
    caption: "Simple wardrobe, clean wall, and a focus on character through posture.",
    asset: {
      src: "/media/photography/editorial-05.jpg",
      alt: "Portrait with folded arms and soft side light",
      type: "image",
      orientation: "portrait",
      width: 1280,
      height: 1706,
    },
  },
];

export const services: ServiceEntry[] = [
  {
    title: "Direction",
    description:
      "Narrative instinct shaped by mood, internal conflict, and emotionally focused staging.",
    },
  {
    title: "Cinematography",
    description:
      "Frames built around light contrast, tactile detail, and quiet atmospheric control.",
  },
  {
    title: "Editing",
    description:
      "Cuts that privilege rhythm, tension, and visual continuity over excess.",
  },
  {
    title: "Writing",
    description:
      "Story ideas rooted in observation, minimal spaces, and psychological weight.",
  },
];

export const bio: BioBlock[] = [
  {
    title: "Profile",
    copy:
      "Aryan Kumar is a filmmaker and cinematography student with a strong interest in visual storytelling, short-form narratives, and emotionally charged image-making. His work often leans on limited locations, minimal setups, and carefully built atmosphere.",
  },
  {
    title: "Approach",
    copy:
      "He is especially drawn to low-light imagery, handheld and static framing, shot composition, and detail-based storytelling through hands, objects, textures, and silence. The goal is not just to capture scenes, but to make images feel psychologically alive.",
  },
];

export const pressOrExperience = [
  {
    eyebrow: "Experience",
    title: "Lead Photographer / UU Fest",
    meta: "May 2025",
    copy:
      "Covered a 3-day college fest through cultural performances, guest interactions, student activity, and behind-the-scenes moments while collaborating with reporters and production teams for university-wide broadcast coverage.",
  },
  {
    eyebrow: "Experience",
    title: "Lead Cameraperson / Times Of Uttaranchal",
    meta: "Sep 2024 - Jun 2025",
    copy:
      "Operated cameras for daily recordings and vox-pop segments, worked with anchors and technical crew, and handled framing, studio lighting, and footage prep for broadcast and online publishing.",
  },
  {
    eyebrow: "Education",
    title: "Bachelors in Cinema",
    meta: "Asian Academy of Film & Television / 2028",
    copy:
      "Currently building a foundation in film language, cinematography, and collaborative production through hands-on academic practice.",
  },
  {
    eyebrow: "Education",
    title: "Diploma in Mass Communication & Journalism",
    meta: "Uttaranchal University / 2025",
    copy:
      "A parallel grounding in communication and media sharpened his ability to observe, report, and translate moments into visual stories.",
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
