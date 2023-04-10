import React from "react";
import Header from "../../../components/Home/Header";
import SignUp from "../../../components/Register/SignUp";
import SEO from "../../../components/seo";

const Register = () => {
  return (
    <>
      <SEO pageTitle="Sign Up" />
      <Header />
      <SignUp></SignUp>
    </>
  );
};

export default Register;
