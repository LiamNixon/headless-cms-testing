// Import Statements
import React from "react";
import { graphql } from "gatsby";

// Types
interface Props {
    data: {
        contentfulPage: {
            id: string
        }
    }
}

const DynamicPage: React.FC<Props> = ({ data }) => {
    const pageData = data.contentfulPage

    return (
        <>
        <span>{pageData.id}</span>
        </>
    )
}

export default DynamicPage

export const query = graphql`
    query ($id: String) {
        contentfulPage(id: {eq: $id}) {
            id
        }
    }
`