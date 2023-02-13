import { graphql } from "../generated";

export const BlogCategoryFragment = graphql(`
  fragment BlogCategory on BlogCategory {
    id
    name
  }
`);

export const BlogPostFragment = graphql(`
  fragment BlogPost on BlogPost {
    id
    subject
    category {
      ...BlogCategory
    }
    thumbnailFile {
      ...SharedFile
    }
  }
`);

export const BlogPostConnectionFragment = graphql(`
  fragment BlogPostConnection on BlogPostConnection {
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        ...BlogPost
      }
      cursor
    }
    totalCount
  }
`);
