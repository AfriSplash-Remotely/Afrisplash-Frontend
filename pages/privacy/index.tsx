import fs from "fs";
import path from "path";
import React from "react";
import type { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import matter, { GrayMatterFile } from "gray-matter";
import GeneralLayout from "layouts/generalLayout";
import PrivacyPolicy from "@/components/Legal";
import styles from ".././../styles/legal.module.scss";

interface PolicyData {
  content: string;
  data: any;
}
interface PrivacyPolicyProps {
  privacyPolicyData: PolicyData;
}

const PrivacyPolicyPage: NextPage<PrivacyPolicyProps> = ({
  privacyPolicyData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content, data: metaData } = privacyPolicyData;

  return (
    <GeneralLayout>
      <div className={styles.legalDocs}>
        <h1 className="text-3xl font-bold">{metaData.title}</h1>
        <PrivacyPolicy content={content} />
      </div>{" "}
    </GeneralLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  privacyPolicyData: PolicyData;
}> = async () => {
  const filePath = path.join(process.cwd(), "content", "privacy-policy.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent) as GrayMatterFile<string>;

  return {
    props: {
      privacyPolicyData: {
        content,
        data,
      },
    },
  };
};
export default PrivacyPolicyPage;
