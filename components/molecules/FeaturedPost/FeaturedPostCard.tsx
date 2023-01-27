import React from "react";
import Image from "next/image";
import { InferProps } from "prop-types";
import { ArticleProp } from "./ArticleInterface";

interface FeaturedPostCardProps {
  article: InferProps<ArticleProp>;
}

const FeaturedPostCard = ({ article }: FeaturedPostCardProps): JSX.Element => {
  return (
    <article className="relative w-full h-full flex flex-col">
      <div className="w-full relative h-72">
        <Image
          src={article?.featuredImage}
          fill
          alt={`${article?.title} featured image`}
          priority
          className="rounded-t-2xl"
        />
      </div>
      <div className="absolute top-1 left-1 rounded-sm bg-[#ffc42d73] p-3 text-xs">
        {article?.category}
      </div>
      <div>
        <h3 className="my-2 text-lg">{article.title}</h3>
        <div className="flex flex-row items-center">
          <Image
            alt={article.title}
            src={article?.author?.image}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-4">
            <p className="mb-1 text-sm">{article?.author?.fullname}</p>
            <p className="text-sm">
              <span className="mr-2">{`${article?.meta?.publishedDate} |`}</span>
              <span>{article?.meta?.readTime}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPostCard;
