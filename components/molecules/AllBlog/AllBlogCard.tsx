import React from "react";
import Image from "next/image";
import { InferProps } from "prop-types";
import { ArticleProp } from "./interface";
interface AllBlogCardProps {
  article: InferProps<ArticleProp>;
}

const AllBlogCard = ({ article }: AllBlogCardProps): JSX.Element => {
  return (
    <article className="relative flex flex-col">
      <div className="relative h-60">
        <Image
          src={article?.featuredImage}
          fill
          alt={`${article?.title} featured image`}
          priority
          className="rounded-t-2xl"
        />
      </div>
      <p className="absolute top-1 right-1 rounded-sm bg-[#ffc42d73] p-3 text-xs">
        {article?.category}
      </p>
      <div>
        <h3 className="my-2 text-lg capitalize">{article.title}</h3>
        <div className="text-sm my-4 capitalize">
          <span className="mr-2">{`${article?.meta?.publishedDate} |`}</span>
          <span>{article?.meta?.readTime}</span>
        </div>
        <p className="mt-2 leading-5">{article?.excerpt}</p>
      </div>
    </article>
  );
};

export default AllBlogCard;
