import { GalleryImage, Project } from "@/lib/types";

export const heroStats = [
  { label: "Visual Worlds", value: "06" },
  { label: "Film Exercises", value: "12" },
  { label: "Frames Obsessed Over", value: "99+" }
];

export const projects: Project[] = [
  {
    id: "ember-mile",
    title: "Ember Mile",
    genre: "Drama",
    year: "2026",
    role: "Cinematography / Camera Operation",
    synopsis:
      "A drifting night-time city portrait about distance, memory, and the warmth left behind.",
    description:
      "Built as a moody student short, Ember Mile explores sodium-vapor streets, reflective glass, and intimate close-ups to create a sense of longing. The visual approach balances handheld immediacy with composed, shadow-heavy frames.",
    coverImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?si=cinematic",
    credits: [
      "Director: Placeholder Name",
      "Cinematography: Aryan Kumar",
      "Editor: Placeholder Name",
      "Production Design: Placeholder Name"
    ],
    btsNotes: [
      "Shot with practical light sources to preserve realism and intimacy.",
      "Focused on warm highlights and deep negative space for emotional contrast.",
      "Experimented with movement that feels observational rather than performative."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "after-rain",
    title: "After Rain Theory",
    genre: "Experimental",
    year: "2025",
    role: "Director / Cinematographer",
    synopsis:
      "An atmospheric visual poem that studies reflections, texture, and the silence after a storm.",
    description:
      "This concept short leans into abstraction, using macro textures, puddle reflections, and layered sound design references to evoke interior emotion through weather and movement.",
    coverImage:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=portfolio",
    credits: [
      "Concept & Direction: Aryan Kumar",
      "Camera: Aryan Kumar",
      "Color Workflow: Placeholder Name",
      "Soundscape: Placeholder Name"
    ],
    btsNotes: [
      "Explored rain reflections as emotional mirrors.",
      "Used tight framing to turn ordinary surfaces into cinematic landscapes.",
      "Composed light to feel tactile and almost documentary-like."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "fifth-floor-sunlight",
    title: "Fifth Floor Sunlight",
    genre: "Coming-of-age",
    year: "2025",
    role: "Lighting / Assistant Camera",
    synopsis:
      "A student film about ambition, loneliness, and the golden hush of borrowed afternoons.",
    description:
      "Designed around warm daylight transitions and soft practicals, this piece studies how light changes the emotional temperature of a scene. The cinematography emphasizes stillness and subtle performance beats.",
    coverImage:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?si=studentfilm",
    credits: [
      "Director: Placeholder Name",
      "Director of Photography: Placeholder Name",
      "Lighting Team: Aryan Kumar",
      "1st AC: Placeholder Name"
    ],
    btsNotes: [
      "Balanced available daylight with motivated interior practicals.",
      "Built a palette around beige walls, skin tones, and drifting window light.",
      "Used slower camera rhythms to make the film feel reflective."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "frame-27",
    title: "Frame 27",
    genre: "Thriller",
    year: "2026",
    role: "Cinematography / Color Planning",
    synopsis:
      "A moody exercise in suspense where every composition hints at what stays just out of sight.",
    description:
      "Frame 27 was imagined as a stylized thriller built around visual restraint. The approach uses narrow beams, selective focus, and silhouette-heavy staging to create dread without excessive spectacle.",
    coverImage:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?si=trailer",
    credits: [
      "Director: Placeholder Name",
      "Cinematography: Aryan Kumar",
      "Gaffer: Placeholder Name",
      "Color Assist: Placeholder Name"
    ],
    btsNotes: [
      "Used negative fill and practical motivated lighting to keep contrast rich.",
      "Created intentional dead space in frames to amplify tension.",
      "Tested lensing choices to preserve intimacy while withholding information."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    title: "Light Test 01",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait"
  },
  {
    id: "g2",
    title: "Set Atmosphere",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g3",
    title: "BTS Focus Pull",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    aspect: "square"
  },
  {
    id: "g4",
    title: "Texture Study",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait"
  },
  {
    id: "g5",
    title: "Monitoring the Frame",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g6",
    title: "Lens and Motion",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait"
  }
];

export const craftPillars = [
  "Camera Language",
  "Lighting Design",
  "Framing & Composition",
  "Visual Research",
  "Editing Rhythm",
  "Storyboarding"
];

export const toolset = [
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "Adobe Photoshop",
  "Adobe Lightroom",
  "After Effects",
  "Shot Listing Workflows"
];

export const journey = [
  {
    year: "Now",
    title: "AAFT Delhi",
    copy:
      "Currently studying BSc Cinematography, building a foundation in visual language, lighting, shot design, and collaborative film practice."
  },
  {
    year: "Next",
    title: "Short Films & Collaborations",
    copy:
      "Growing through student productions, cinematography exercises, and visual experiments that refine instinct and craft."
  },
  {
    year: "Ahead",
    title: "Signature Visual Voice",
    copy:
      "Working toward a body of work that feels emotionally grounded, visually confident, and unmistakably personal."
  }
];
