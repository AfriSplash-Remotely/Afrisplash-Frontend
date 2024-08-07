import React from "react";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import Link from "next/link";

const AllBlogCardProp = {
  url: PropTypes.string.isRequired,
  cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  read_time: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  _author: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

const AllBlogCard = ({ url, title, summary, categories, read_time, createdAt, cover_image }: InferProps<typeof AllBlogCardProp>): JSX.Element => {
  return (
    <article className="relative flex flex-col">
      <div className="relative h-60">
        <Link href={`/blog/${url}`}>
          <Image
            src={cover_image}
            fill
            alt={`${title} featured image`}
            priority
            className="rounded-t-2xl"
          /></Link>
      </div>
      <p className="absolute top-1 right-1 rounded-sm bg-[#ffc42d73] p-3 text-xs">
        {categories}
      </p>
      <div>
        <h3 className="my-2 text-lg capitalize">{title}</h3>
        <div className="text-sm my-4 capitalize">
          <span className="mr-2">{`${createdAt} |`}</span>
          <span>{read_time}mins read</span>
        </div>
        <p className="mt-2 leading-5">{summary}</p>
      </div>
    </article>
  );
};

export default AllBlogCard;
