import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Offer from "../components/Offers/Offer";
import NewCollection from "../components/NewCollecion/NewCollection";
import Newsletter from "../components/Newsletter/Newsletter";

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection/>
      <Newsletter/>
    </div>
  );
};

export default shop;
