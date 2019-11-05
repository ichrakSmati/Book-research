import {ImageLinks} from './imageLinks';

export class VolumeInfo {
  title: string;
  authors: string[] = [];
  publishedDate: number;
  pageCount: number;
  printType: string;
  maturityRating: string;
  allowAnonLogging: string;
  language: string;
  previewLink: string;
  description: string;
  imageLinks: ImageLinks;
  categories: string [] = [];
}
