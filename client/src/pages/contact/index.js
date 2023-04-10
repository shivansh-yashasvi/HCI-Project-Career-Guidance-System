import React from "react";
import ContactArea from "../../../components/Contact/ContactArea";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Contact" />
      <Header />
      <ContactArea />
      <Footer />
    </>
  );
};

export default Contact;
