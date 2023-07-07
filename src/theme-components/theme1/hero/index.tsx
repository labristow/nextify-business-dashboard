import React from "react";
import Theme1PromotionSlider from "./Theme1PromotionSlider";
import Theme1ProductCategories from "./Theme1ProductCategories";
import Theme1HeroRightPromotion from "./Theme1HeroRightPromotion";

function Theme1Hero() {
  return (
    <div>
      <Theme1ProductCategories />
      <Theme1PromotionSlider />
      <Theme1HeroRightPromotion />
    </div>
  );
}

export default Theme1Hero;
