import React from "react";
import AuthorImage from "assets/blog/author.png";
import FeaturedImage from "assets/blog/laptop_office.jpg";
import { ArticleProp } from "./ArticleInterface";
import FeaturedPostCard from "./FeaturedPostCard";
import { generateUniqueId } from "@/utils/helper";

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
    <section className="bg-[#F8F8F8] py-[5rem] px-4 md:px-10 xl:px-[110px] h-max">
      <h2 className="mb-10 text-[32px]">Featured Posts</h2>
      <div className="flex justify-between w-full h-max flex-wrap ">
        {mockdata.map((article) => (
          <div key={generateUniqueId()} className="w-3/12 ">
            <FeaturedPostCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPost;
