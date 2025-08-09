import React from "react";
import HomeScrollTabs from "./HomeScrollTabs";

export default function HomeSectionPopularProducts() {
  return (
    <div className="flex-between flex-col lg:flex-row">
      <div className="lg:basis-1/3">
        <h2 className="text-xl font-semibold">Popular Products</h2>
        <p className="text-sm font-normal">
          Do not miss the current offers until the end of March.
        </p>
      </div>
      <div className="lg:basis-[60%]">
        <HomeScrollTabs />
      </div>
    </div>
  );
}
