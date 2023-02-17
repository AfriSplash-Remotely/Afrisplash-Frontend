import React from "react";
import { NextPage } from "next";
import { MentorCard, MentorTab } from "components/Forum/MentorCardComponent";
import ForumLayout from "layouts/forumLayout";
import styles from "styles/Forum.module.scss";
import { mentorsData } from "utils/fakeData";

const Mentors: NextPage = () => {
  return (
    <ForumLayout>
      <div className={` ${styles.fill} w-full`}>
        <MentorTab />

        <div className="grid gap-6 lg:grid-cols-3">
          {mentorsData.map((mentor) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              position={mentor.position}
              role={mentor.role}
              flag={mentor.flag}
              src={mentor.src}
            />
          ))}
        </div>
      </div>
    </ForumLayout>
  );
};

export default Mentors;
