export interface SongType {
  id?: string;
  artiste?: string;
  category?: string;
  date: string;
  genre?: string;
  link: string;
  title: string;
  hostNames?: string;
}

export interface TourType {
  id?: string;
  name: string;
  link: string;
  description: string;
  date: string;
}
