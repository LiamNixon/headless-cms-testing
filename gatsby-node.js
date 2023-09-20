const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
            {
                allContentfulPage {
                    edges {
                        node {
                            id
                            urlSlug
                        }
                    }
                }
            }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query.')
        return
    }

    const DynamicPage = path.resolve("src/templates/DynamicPage.js")
    result.data.allContentfulPage.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/${node.urlSlug}`,
            component: DynamicPage,
            context: {id: node.id}
        })
    })
}