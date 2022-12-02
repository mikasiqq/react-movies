import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = ({props}) => {
  return (
    <ContentLoader
      speed={2}
      width={345}
      height={560}
      viewBox="0 0 345 560"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="20" y="10" rx="10" ry="10" width="200" height="20" />
      <rect x="57" y="40" rx="0" ry="0" width="230" height="345" />
      <rect x="97" y="395" rx="5" ry="5" width="150" height="24" />
      <rect x="105" y="425" rx="5" ry="5" width="135" height="24" />
      <rect x="121" y="460" rx="5" ry="5" width="105" height="18" />
      <rect x="121" y="485" rx="5" ry="5" width="105" height="18" />
      <rect x="121" y="510" rx="5" ry="5" width="105" height="18" />
      <rect x="67" y="540" rx="0" ry="0" width="210" height="242" />
    </ContentLoader>
  );
};

export default CardSkeleton;
