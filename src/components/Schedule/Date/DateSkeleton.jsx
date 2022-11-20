import React from "react"
import ContentLoader from "react-content-loader"

const DateSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={75}
    height={50}
    viewBox="0 0 75 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="75" height="20" /> 
    <rect x="0" y="30" rx="10" ry="10" width="75" height="20" />
  </ContentLoader>
)

export default DateSkeleton