import React from "react";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import FeaturedImage from "assets/blog/laptop_office.jpg";
import AllBlogCard from "./AllBlogCard";

import { ArticleProp } from "./interface";

const mockdata: ArticleProp[] = [
  {
    featuredImage: FeaturedImage,
    title: "product design ",
    category: "Product management",
    excerpt: `5 tips for a Product manager to ensure great collaboration... `,
    author: {
      image: "/images/author.png",
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
  {
    featuredImage: FeaturedImage,
    title: "product design ",
    category: "Product management",
    excerpt: `5 tips for a Product manager to ensure great collaboration... `,
    author: {
      image: "/images/author.png",
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
  {
    featuredImage: FeaturedImage,
    title: "product design ",
    category: "Product management",
    excerpt: `5 tips for a Product manager to ensure great collaboration... `,
    author: {
      image: "/images/author.png",
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
  {
    featuredImage: FeaturedImage,
    title: "product design ",
    category: "Product management",
    excerpt: `5 tips for a Product manager to ensure great collaboration... `,
    author: {
      image: "/images/author.png",
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
  {
    featuredImage: FeaturedImage,
    title: "product design ",
    category: "Product management",
    excerpt: `5 tips for a Product manager to ensure great collaboration... `,
    author: {
      image: "/images/author.png",
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
  {
    featuredImage: FeaturedImage,
    title: "product design ",
    category: "Product management",
    excerpt: `5 tips for a Product manager to ensure great collaboration... `,
    author: {
      image: "/images/author.png",
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
  {
    featuredImage: FeaturedImage,
    title: "product design ",
    category: "Product management",
    excerpt: `5 tips for a Product manager to ensure great collaboration... `,
    author: {
      image: "/images/author.png",
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
  {
    featuredImage: FeaturedImage,
    title: "product design ",
    category: "Product management",
    excerpt: `5 tips for a Product manager to ensure great collaboration... `,
    author: {
      image: "/images/author.png",
      fullname: "Abdulbasit Ibrahim",
    },
    meta: {
      publishedDate: "may 30",
      readTime: "5min read",
    },
  },
];

const AllBlog = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between bg-[#FDF1C9] py-4 px-4 md:px-10 xl:px-[96px]">
        <h2 className="text-[32px]">All Blogs</h2>
        <Link href="/blogs">
          <a className="flex flex-row items-center font-bold text-[#0D5520]">
            <span className="mr-2">See more</span>
            <ArrowRightIcon className="h-5 w-7" />
          </a>
        </Link>
      </div>
      <div className="md-items-center mt-[4rem] flex flex-col items-start gap-2 py-4 px-4 md:flex-row md:px-10 xl:px-[96px]">
        <div className="flex w-[430px] max-w-[100%] flex-row items-center rounded-lg bg-[#F8F8F8] p-4">
          <button className="border-none bg-transparent outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <input
            type="text"
            className="ml-4 border-none bg-transparent text-sm outline-none"
            placeholder="Search for post"
          />
        </div>
        <Link href="/blogs">
          <a className="flex flex-row items-center rounded-lg bg-[#0D5520] p-3 px-6 text-white">
            <span className="mr-2">All blogs</span>
            <ChevronDownIcon className="h-5 w-7" />
          </a>
        </Link>
      </div>

      <div className="grid grid-cols-1 items-center justify-center gap-x-4 gap-y-8 py-4  px-4  md:grid-cols-2  md:px-10 lg:grid-cols-3 xl:grid-cols-4 xl:px-[96px]">
        {mockdata.map((article, index) => (
          <AllBlogCard article={article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
