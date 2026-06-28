export type MediaAsset = {
  src: string;
  alt: string;
  type: "image" | "video";
  orientation: "landscape" | "portrait" | "square";
  width: number;
  height: number;
  poster?: string;
  caption?: string;
  priority?: boolean;
};

export type ContactLink = {
  label: string;
  href: string;
  value: string;
};

export type FeaturedFilm = {
  title: string;
  year: string;
  runtime: string;
  logline: string;
  description: string;
  role: string;
  embedUrl: string;
  poster: MediaAsset;
  stills: MediaAsset[];
  credits: string[];
};

export type FilmEntry = {
  title: string;
  year: string;
  format: string;
  note: string;
};

export type ReelEntry = {
  title: string;
  platform: string;
  thumbnail: MediaAsset;
  url: string;
  format: string;
  caption: string;
  highlight: string;
  preview?: MediaAsset;
};

export type PhotoEntry = {
  title: string;
  caption: string;
  asset: MediaAsset;
};

export type ServiceEntry = {
  title: string;
  description: string;
};

export type BioBlock = {
  title: string;
  copy: string;
};
