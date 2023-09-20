import { graphql } from 'gatsby'

const DynamicPage = ({data}) => {
    const pageData = data.contentfulPage
    return (
        <>
            <span>{pageData.id}</span>
            <br/>
            <span>{pageData.urlSlug}</span>
        </>
    )
}

export const query = graphql`
    query ($id: String) {
        contentfulPage(id: { eq: $id }) {
            id
            urlSlug
        }
    }
`

export default DynamicPage