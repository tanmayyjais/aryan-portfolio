export type Project = {
  id: string;
  title: string;
  genre: string;
  year: string;
  role: string;
  synopsis: string;
  description: string;
  coverImage: string;
  videoUrl: string;
  credits: string[];
  btsNotes: string[];
  gallery: string[];
};

export type GalleryImage = {
  id: string;
  title: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
};
