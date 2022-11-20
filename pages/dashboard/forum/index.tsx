import React from "react";
import { NextPage } from "next";
import { useLocalStorage } from "hooks/useLocalStorage";
import ForumLayout from "layouts/forumLayout";
import Mentors from "./mentors";
import Splash from "./splash";
import Trending from "./trending";

interface IIndex {
  index: number | null;
  setIndex: React.Dispatch<React.SetStateAction<number>> | null;
}

export const IndexContext = React.createContext<IIndex>({
  index: 0,
  setIndex: null,
});
const Forum: NextPage = () => {
  const { index, setIndex } = useLocalStorage("index");

  return (
    <ForumLayout>
      <IndexContext.Provider value={{ index, setIndex }}>
        {index === 0 && <Trending />}
        {index === 1 && <Splash />}
        {index === 2 && <Mentors />}
      </IndexContext.Provider>
    </ForumLayout>
  );
};

export default Forum;
