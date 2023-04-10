import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "swiper/css/bundle";
import "react-responsive-modal/styles.css";
import { coursesData } from "../../redux/features/coursesSlice";
import { store } from "../../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import { blogData } from "../../redux/features/blogSlice";
import { eventData } from "../../redux/features/eventSlice";
import { teamData } from "../../redux/features/teamSlice";
import { categoryData } from "../../redux/features/categorySlice";
import { initializeApp } from "firebase/app";
import { getTotal } from "../../redux/features/cartSlice";
import Script from 'next/script'

import SEO from "../../components/seo";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const firebaseConfig = {
  apiKey: "AIzaSyBBD8V6uKNKDyi0rVCLB5Jsy3kX-hickKQ",
  authDomain: "careercare-a4171.firebaseapp.com",
  projectId: "careercare-a4171",
  storageBucket: "careercare-a4171.appspot.com",
  messagingSenderId: "125348466316",
  appId: "1:125348466316:web:6f42ecf428ba2dec2975a9",
};
initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(coursesData());
    store.dispatch(blogData());
    store.dispatch(eventData());
    store.dispatch(teamData());
    store.dispatch(categoryData());
    store.dispatch(getTotal());
  }, []);

  return (
    <React.Fragment>
      <SEO font="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap" />
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />


        <Script src="//js-na1.hs-scripts.com/22631566.js" />

      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
