import { StaticImageData } from "next/image";

export interface ArticleProp {
  featuredImage: string | StaticImageData;
  title: string;
  category: string;
  author: {
    image: string | StaticImageData;
    fullname: string;
  };
  meta: {
    publishedDate: string;
    readTime: string;
  };
}
