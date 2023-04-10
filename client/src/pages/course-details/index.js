import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import CourseDetailsArea from "../../../components/CourseDetails/CourseDetailsArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";
import { singleCourse } from "../../../redux/features/coursesSlice";

const CourseDetails = () => {
  // single courses
  const singleCourseItem = useSelector((state) => state.courses.course);
  const status = useSelector((state) => state.courses.courseStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleCourse("622037c6ea7975d304b6b4ef"));
  }, [dispatch]);

  return (
    <>
      <SEO pageTitle="Course Details" />
      <Header />
      <BreadCrumb title="Our Courses" subtitle="Courses" />
      <CourseDetailsArea courseData={singleCourseItem} />
      <Footer />
    </>
  );
};

export default CourseDetails;
