export interface ArticleProp {
  featuredImage: string;
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
