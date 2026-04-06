import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={285}
    viewBox="0 0 250 285"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* IMAGE */}
    <rect x="0" y="0" rx="12" ry="12" width="250" height="160" />

    {/* TITLE (по центру) */}
    <rect x="35" y="175" rx="6" ry="6" width="180" height="20" />

    {/* INFO (по центру) */}
    <rect x="75" y="200" rx="6" ry="6" width="100" height="15" />

    {/* PRICE */}
    <rect x="0" y="235" rx="8" ry="8" width="60" height="20" />

    {/* BUTTON */}
    <rect x="130" y="225" rx="12" ry="12" width="120" height="40" />
  </ContentLoader>
);

export default Skeleton;
