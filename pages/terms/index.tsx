import fs from "fs";
import path from "path";
import React from "react";
import type { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import matter, { GrayMatterFile } from "gray-matter";
import GeneralLayout from "layouts/generalLayout";
import Legal from "@/components/Legal";
import styles from ".././../styles/legal.module.scss";

interface ITermsData {
  content: string;
  data: any;
}
interface ITermsDataProps {
  termsData: ITermsData;
}

const Terms: NextPage<ITermsDataProps> = ({
  termsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export const getStaticProps: GetStaticProps<{
  termsData: ITermsData;
}> = async () => {
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
};
export default Terms;
