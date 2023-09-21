import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Seo = ({ title, description, pathname, children }) => {
  const data = {
    title: title || "CTFL Testing",
    description: description || null
  };

  return (
    <>
      <title>{data.title}</title>
      {
        data.description ? <meta name="description" content={data.description}/> : null
      }
    </>
  )
};

export default Seo