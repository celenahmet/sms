
export interface SpeakerContent {
  role: string;
  topic: string;
  bio: string;
  highlights: string[];
}

export interface Speaker {
  id: string;
  name: string;
  day: 1 | 2;
  image: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  tr: SpeakerContent;
  en: SpeakerContent;
}

export interface Stat {
  label: string;
  value: string;
}
