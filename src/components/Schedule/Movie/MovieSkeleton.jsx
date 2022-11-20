import React from "react"
import ContentLoader from "react-content-loader"

const MovieSkeleton = (props) => (
  <ContentLoader 
    style={{marginTop: '10px'}}
    speed={2}
    width={490}
    height={300}
    viewBox="0 0 490 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="200" height="300" /> 
    <rect x="220" y="0" rx="5" ry="5" width="250" height="20" /> 
    <rect x="220" y="30" rx="5" ry="5" width="225" height="20" /> 
    <rect x="220" y="60" rx="5" ry="5" width="175" height="20" /> 
    <rect x="221" y="95" rx="5" ry="5" width="25" height="25" /> 
    <rect x="260" y="95" rx="10" ry="10" width="50" height="25" />
  </ContentLoader>
)

export default MovieSkeleton
