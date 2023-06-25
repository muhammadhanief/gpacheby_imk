import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Loader() {
  return (
    <div className="cards">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton height={300} duration={2} />
      </SkeletonTheme>
    </div>
  );
}

export default Loader;
