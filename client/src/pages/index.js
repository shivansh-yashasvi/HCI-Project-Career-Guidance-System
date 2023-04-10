import AboutArea from "../../components/Home/AboutArea";
import CounterArea from "../../components/Home/CounterArea";
import Features from "../../components/Home/Features";
import Header from "../../components/Home/Header";
import HeroArea from "../../components/Home/HeroArea";
import HomeCourses from "../../components/Home/HomeCourses";
import Cta from "../../components/Home/Cta";
import Footer from "../../components/common/Footer";
import SEO from "../../components/seo";

export default function Home() {
  return (
    <>
      <SEO pageTitle="Home" />
      <Header />
      <HeroArea />
      <Features />
      <AboutArea />
      <CounterArea />
      <HomeCourses />
      <Cta />
      <Footer />
    </>
  );
}
