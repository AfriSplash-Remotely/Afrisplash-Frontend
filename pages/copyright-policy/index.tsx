import fs from "fs";
import path from "path";
import React from "react";
import type { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import matter, { GrayMatterFile } from "gray-matter";
import GeneralLayout from "layouts/generalLayout";
import Legal from "@/components/Legal";
import styles from ".././../styles/legal.module.scss";

interface PolicyData {
  content: string;
  data: any;
}

const CopyRightPolicyPage: NextPage<{ copyRightPolicyData: PolicyData }> = ({
  copyRightPolicyData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content, data: metaData } = copyRightPolicyData;

  return (
    <GeneralLayout>
      <div className={styles.legalDocs}>
        <h1 className="text-3xl font-bold">{metaData.title}</h1>
        <Legal content={content} />
      </div>{" "}
    </GeneralLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  copyRightPolicyData: PolicyData;
}> = async () => {
  const filePath = path.join(process.cwd(), "content", "copyright-policy.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent) as GrayMatterFile<string>;

  return {
    props: {
      copyRightPolicyData: {
        content,
        data,
      },
    },
  };
};
export default CopyRightPolicyPage;
