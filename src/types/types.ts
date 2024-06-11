export interface Square {
  id: string;
  src: string;
}

export type ProductType = {
  image: string;
  video: string;
  genre: string;
  title: string;
  release: string;
  for: string;
  description: string;
  id: number;
};

export type PressReleaseType = {
  title: string;
  subtitle: string;
  filterName: string;
  year: string;
};

export type PressReleaseDataType = {
  id: number;
  date: string;
  info: string;
};

export type JobSearchType = {
  location: string;
  jobType: string;
  title: string;
};
