<<<<<<< HEAD
import { StaticImageData } from "next/image";

export interface ArticleProp  {
    featuredImage: string | StaticImageData;
=======
export interface ArticleProp  {
    featuredImage: string;
>>>>>>> 06ce0d1117f9bb3e2c36fc3f9210a4d37508ef4c
    title:string ;
    excerpt: string;
    category: string;
    author: {
      image: string;
      fullname: string;
    },
    meta: {
      publishedDate:string;
      readTime: string;
    },
}