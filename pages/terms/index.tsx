import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import GeneralLayout from "layouts/generalLayout";
import Legal from "@/components/Legal";
import styles from ".././../styles/legal.module.scss";

interface ITermsData {
  content: string;
  data: {
    title: string;
  };
}
interface ITermsDataProps {
  termsData: ITermsData;
}

const Terms = ({ termsData }: ITermsDataProps) => {
  const { content, data: metaData } = termsData;

  return (
    <GeneralLayout>
      <div className={`afri-container ${styles.legalDocs}`}>
        <h1 className="text-3xl font-bold">{metaData.title}</h1>
        <Legal content={content} />
      </div>{" "}
    </GeneralLayout>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "terms.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent) as GrayMatterFile<string>;

  return {
    props: {
      termsData: {
        content,
        data,
      },
    },
  };
}
export default Terms;
