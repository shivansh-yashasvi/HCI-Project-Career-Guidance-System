import React from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";
import TeamDetailsArea from "../../../components/TeamDetails/TeamDetailsArea";

const TeamDetails = () => {
  // teams
  const teams = useSelector((state) => state.teams.allTeams);
  // coursesItems
  const coursesItems = useSelector((state) => state.courses.allCourses);

  // singleTeam
  const singleTeam = teams[0];

  return (
    <>
      <SEO pageTitle="Team Details" />
      <Header />
      <BreadCrumb title="Team Details" subtitle="Team Details" />
      <TeamDetailsArea singleTeam={singleTeam} coursesItems={coursesItems} />
      <Footer />
    </>
  );
};

export default TeamDetails;
