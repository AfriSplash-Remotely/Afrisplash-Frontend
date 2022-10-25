import React from "react";
import { NextPage } from "next";
import AllBlog from "components/molecules/AllBlog";
import FeaturedPost from "components/molecules/FeaturedPost";
import Hero from "components/molecules/Hero";
import Newsletter from "components/molecules/Newsletter";
import AdminLayout from "layouts/adminLayout";

const Blog: NextPage = () => {
  return (
    <AdminLayout>
      <Hero />
      <FeaturedPost />
      <AllBlog />
      <Newsletter />
    </AdminLayout>
  );
};

export default Blog;
