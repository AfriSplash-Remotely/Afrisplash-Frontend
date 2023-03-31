import axios from "@/utils/axios";
import { blogI } from "./blog.interface";

export const getAllBlogs = async (): Promise<blogI[]> => {
  const {
    data: { data },
  } = await axios.get("/blog/posts");
  return data;
};
