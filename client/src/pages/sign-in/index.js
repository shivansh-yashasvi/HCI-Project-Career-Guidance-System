import React from "react";
import Header from "../../../components/Home/Header";
import LoginArea from "../../../components/Login/LoginArea";
import SEO from "../../../components/seo";

const SignIn = () => {
  return (
    <>
      <SEO pageTitle="Sign In" />
      <Header />
      <LoginArea />
    </>
  );
};

export default SignIn;
