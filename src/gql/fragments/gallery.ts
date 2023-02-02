import { graphql } from "@/gql/generated";

export const GalleryFragment = graphql(`
  fragment GalleryFragment on Gallery {
    id
    name
    description
    releaseDay
    isViewable
    isCommentable
  }
`);

export const GalleryConnectionFragment = graphql(`
  fragment GalleryConnectionFragment on GalleryConnection {
    pageInfo {
      ...PageInfoFragment
    }
    edges {
      node {
        ...GalleryFragment
      }
      cursor
    }
    totalCount
  }
`);
