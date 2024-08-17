import React from "react";
import FullWidthImage1 from "./components/FullWidthImage1";
import FullWidthImage2 from "./components/FullWidthImage2";
import PageDown from "./components/PageDown";
// import SlideShow from "./components/SlideShow";

const Home = () => {
  return (
    <React.Fragment>
      <FullWidthImage1 />
      <PageDown />
      <FullWidthImage2 />
    </React.Fragment>
  );
};

export default Home;
