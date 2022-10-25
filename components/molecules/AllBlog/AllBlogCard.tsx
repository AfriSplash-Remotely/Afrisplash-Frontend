import React from "react";
import Image from "next/image";
import { InferProps } from "prop-types";
import { ArticleProp } from "./interface";
interface AllBlogCardProps {
  article: InferProps<ArticleProp>;
}

const AllBlogCard = ({ article }: AllBlogCardProps): JSX.Element => {
  return (
    <article className="relative flex max-w-[400px] flex-col">
      <Image
        src={article?.featuredImage}
        width={50}
        height={50}
        layout="responsive"
        sizes="100vw"
        alt={`${article?.title} featured image`}
        priority
        className="rounded-t-2xl"
      />
      <p className="absolute top-1 right-1 rounded-sm bg-[#ffc42d73] p-3 text-xs">
        {article?.category}
      </p>
      <div>
        <h3 className="my-2 text-sm uppercase">{article.title}</h3>
        <p className="text-sm">
          <span className="mr-2">{`${article?.meta?.publishedDate} |`}</span>
          <span>{article?.meta?.readTime}</span>
        </p>
        <p className="mt-2 leading-5">{article?.excerpt}</p>
      </div>
    </article>
  );
};

export default AllBlogCard;
