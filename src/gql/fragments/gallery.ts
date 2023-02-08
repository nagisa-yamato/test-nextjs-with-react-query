import { graphql } from "@/gql/generated";

export const GalleryContentFragment = graphql(`
  fragment GalleryContentFragment on GalleryContent {
    id
    contentFile {
      ...SharedFileFragment
    }
  }
`);

export const GalleryFragment = graphql(`
  fragment GalleryFragment on Gallery {
    id
    name
    releaseDay
    isViewable
    contents {
      ...GalleryContentFragment
    }
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
