import React from "react";
import SEO from "../../../components/seo";
import Header from "../../../components/Home/Header";
import BreadCrumb from "../../../components/common/BreadCrumb";
import WriteBlogArea from "../../../components/WriteBlog/WriteBlogArea";

const WriteBlog = () => {
  return (
    <>
      <SEO pageTitle="Wite a Blog" />
      <Header />
      <BreadCrumb title="Write a Blog" subtitle="Write Blog" />

      <WriteBlogArea />
    </>
  );
};

export default WriteBlog;
