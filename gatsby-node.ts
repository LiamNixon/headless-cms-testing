import * as path from "path"
import { GatsbyNode } from "gatsby"

export type PageType = {
    id: string
    urlSlug: string
}

type DataType = {
    allContentfulPage: {
        nodes: PageType[] 
    }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
    const { createPage } = actions

    const pageQuery = await graphql<DataType>(`
        {
            allContentfulPage {
                nodes {
                    id
                    urlSlug
                }
            }
        }
    `)

    const pageTemplate = path.resolve("src/templates/DynamicPage.tsx")

    const createPagePromise = pageQuery.data?.allContentfulPage.nodes.map((node) => {
        createPage({
            path: `/blog/${node.urlSlug}`,
            component: pageTemplate,
            context: {
                id: node.id
            },
        })
    })

    await Promise.all([createPagePromise])
}