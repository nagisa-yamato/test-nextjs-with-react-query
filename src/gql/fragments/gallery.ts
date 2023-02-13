import { graphql } from "@/gql/generated";

export const GalleryContentFragment = graphql(`
  fragment GalleryContent on GalleryContent {
    id
    contentFile {
      ...SharedFile
    }
  }
`);

export const GalleryFragment = graphql(`
  fragment Gallery on Gallery {
    id
    name
    releaseDay
    isViewable
    contents {
      ...GalleryContent
    }
  }
`);

export const GalleryConnectionFragment = graphql(`
  fragment GalleryConnection on GalleryConnection {
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        ...Gallery
      }
      cursor
    }
    totalCount
  }
`);
