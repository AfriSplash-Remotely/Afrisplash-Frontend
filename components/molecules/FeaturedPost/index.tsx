import React from "react";
import AuthorImage from "assets/blog/author.png";
import FeaturedImage from "assets/blog/laptop_office.jpg";
import { ArticleProp } from "./ArticleInterface";
import FeaturedPostCard from "./FeaturedPostCard";

const mockdata: ArticleProp[] = [
  {
    featuredImage: FeaturedImage,
    title: "5 tips for a Product manager to ensure great collaboration... ",
    category: "Product management",
    author: {
      image: AuthorImage,
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
  {
    featuredImage: FeaturedImage,
    title: "5 tips for a Product manager to ensure great collaboration... ",
    category: "Product management",
    author: {
      image: AuthorImage,
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
  {
    featuredImage: FeaturedImage,
    title: "5 tips for a Product manager to ensure great collaboration... ",
    category: "Product management",
    author: {
      image: AuthorImage,
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
];

const FeaturedPost = () => {
  return (
    <section className="bg-[#F8F8F8] py-[5rem] px-4 md:px-10 xl:px-[110px]">
      <h2 className="mb-4 text-[32px]">Featured Posts</h2>
      <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {mockdata.map((article, index) => (
          <FeaturedPostCard article={article} key={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPost;
