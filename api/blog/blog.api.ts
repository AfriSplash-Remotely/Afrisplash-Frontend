import axios from "@/utils/axios";
import { blogI, singleBlogI } from "./blog.interface";

export const getAllBlogs = async (): Promise<blogI[]> => {
  const {
    data: { data },
  } = await axios.get("/blog/posts");
  return data;
};

export const getBlog = async (blogUrl: string): Promise<singleBlogI> => {
  const {
    data: { data },
  } = await axios.get(`/blog/post/${blogUrl}`);
  return data;
};
