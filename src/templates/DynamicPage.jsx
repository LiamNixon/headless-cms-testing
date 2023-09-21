import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";

const DynamicPage = ({ data }) => {
  const page = data.contentfulPage;
  return (
    <>
      <span>{page.id}</span>
      <br />
      <span>{page.urlSlug}</span>
    </>
  );
};

// Retrieve Data from Contentful
export const query = graphql`
  query ($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      pageDescription
      pageTitle
      urlSlug
    }
  }
`;

export default DynamicPage;

export const Head = ({ data }) => {
  const page = data.contentfulPage;
  return (
    <>
      <Seo title={page.pageTitle} description={page.pageDescription ? page.pageDescription : null}/>
    </>
  );
};
