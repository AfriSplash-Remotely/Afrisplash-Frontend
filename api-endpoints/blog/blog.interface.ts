export interface blogI {
  _id: string;
  _author: string;
  title: string;
  url: string;
  categories: string;
  tags: string[];
  summary: string;
  read_time: number;
  cover_image: string;
  thumbnail: string;
  views: number;
  disable_comments: false;
  createdAt: string;
  updatedAt: string;
  _content: string;
}
export interface singleBlogI {
  post: blogI;
  author: null;
  body: {
    message: string;
  };
}