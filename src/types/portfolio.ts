export interface Video {
  id: string;
  title: string;
  description: string;
  poster: string;
  videoUrl: string;
  category: string[];
  featured: boolean;
}

export interface Graphic {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  featured: boolean;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  email: string;
  social: {
    label: string;
    url: string;
  }[];
}
