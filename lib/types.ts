export type MediaAsset = {
  src: string;
  alt: string;
  type: "image" | "video";
  orientation: "landscape" | "portrait" | "square";
  width: number;
  height: number;
  poster?: string;
  priority?: boolean;
  previewSrc?: string;
};

export type PortfolioEntry = {
  id: string;
  title: string;
  kind: "film" | "clip" | "photo";
  year: string;
  role: string;
  thumbnail: MediaAsset;
  media: MediaAsset;
  sourceLabel: string;
  href?: string;
  featured?: boolean;
};

export type AboutExperience = {
  title: string;
  meta: string;
};

export type AboutBlock = {
  statement: string;
  education: string;
  experience: AboutExperience[];
};

export type ContactLink = {
  label: string;
  href: string;
  value: string;
};
