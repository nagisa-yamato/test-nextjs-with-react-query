import { graphql } from "@/graphql/generated";

export const GalleryImagePresetUrlFragment = graphql(`
  fragment GalleryImagePresetUrl on GalleryImagePresetUrl {
    thumbnail
    small
    medium
    large
    xLarge
    original
  }
`);

export const GalleryContentFragment = graphql(`
  fragment GalleryContent on GalleryContent {
    id
    contentFile {
      ...SharedFile
    }
    imagePresetUrl {
      ...GalleryImagePresetUrl
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
