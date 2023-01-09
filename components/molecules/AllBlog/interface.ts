import { StaticImageData } from "next/image";

export interface ArticleProp {
  featuredImage: string | StaticImageData;
  title: string;
  excerpt: string;
  category: string;
  author: {
    image: string;
    fullname: string;
  };
  meta: {
    publishedDate: string;
    readTime: string;
  };
}
