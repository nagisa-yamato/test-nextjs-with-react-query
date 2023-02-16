/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  "\n  fragment BlogCategory on BlogCategory {\n    id\n    name\n  }\n":
    types.BlogCategoryFragmentDoc,
  "\n  fragment BlogPost on BlogPost {\n    id\n    subject\n    category {\n      ...BlogCategory\n    }\n    thumbnailFile {\n      ...SharedFile\n    }\n  }\n":
    types.BlogPostFragmentDoc,
  "\n  fragment BlogPostConnection on BlogPostConnection {\n    pageInfo {\n      ...PageInfo\n    }\n    edges {\n      node {\n        ...BlogPost\n      }\n      cursor\n    }\n    totalCount\n  }\n":
    types.BlogPostConnectionFragmentDoc,
  "\n  fragment PageInfo on PageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n":
    types.PageInfoFragmentDoc,
  "\n  fragment SharedFile on SharedFile {\n    id\n    url\n    alternativeContent\n  }\n":
    types.SharedFileFragmentDoc,
  "\n  fragment GalleryContent on GalleryContent {\n    id\n    contentFile {\n      ...SharedFile\n    }\n  }\n":
    types.GalleryContentFragmentDoc,
  "\n  fragment Gallery on Gallery {\n    id\n    name\n    releaseDay\n    isViewable\n    contents {\n      ...GalleryContent\n    }\n  }\n":
    types.GalleryFragmentDoc,
  "\n  fragment GalleryConnection on GalleryConnection {\n    pageInfo {\n      ...PageInfo\n    }\n    edges {\n      node {\n        ...Gallery\n      }\n      cursor\n    }\n    totalCount\n  }\n":
    types.GalleryConnectionFragmentDoc,
  "\n  query Blog(\n    $slug: String!\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    blog(slug: $slug) {\n      id\n      posts(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        orderBy: { direction: DESC, field: START_AT }\n      ) {\n        ...BlogPostConnection\n      }\n    }\n  }\n":
    types.BlogDocument,
  "\n  query GalleryGroup(\n    $slug: String!\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    galleryGroup(slug: $slug) {\n      id\n      galleries(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        orderBy: { direction: DESC, field: START_AT }\n      ) {\n        ...GalleryConnection\n      }\n    }\n  }\n":
    types.GalleryGroupDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BlogCategory on BlogCategory {\n    id\n    name\n  }\n"
): (typeof documents)["\n  fragment BlogCategory on BlogCategory {\n    id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BlogPost on BlogPost {\n    id\n    subject\n    category {\n      ...BlogCategory\n    }\n    thumbnailFile {\n      ...SharedFile\n    }\n  }\n"
): (typeof documents)["\n  fragment BlogPost on BlogPost {\n    id\n    subject\n    category {\n      ...BlogCategory\n    }\n    thumbnailFile {\n      ...SharedFile\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BlogPostConnection on BlogPostConnection {\n    pageInfo {\n      ...PageInfo\n    }\n    edges {\n      node {\n        ...BlogPost\n      }\n      cursor\n    }\n    totalCount\n  }\n"
): (typeof documents)["\n  fragment BlogPostConnection on BlogPostConnection {\n    pageInfo {\n      ...PageInfo\n    }\n    edges {\n      node {\n        ...BlogPost\n      }\n      cursor\n    }\n    totalCount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PageInfo on PageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n"
): (typeof documents)["\n  fragment PageInfo on PageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment SharedFile on SharedFile {\n    id\n    url\n    alternativeContent\n  }\n"
): (typeof documents)["\n  fragment SharedFile on SharedFile {\n    id\n    url\n    alternativeContent\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment GalleryContent on GalleryContent {\n    id\n    contentFile {\n      ...SharedFile\n    }\n  }\n"
): (typeof documents)["\n  fragment GalleryContent on GalleryContent {\n    id\n    contentFile {\n      ...SharedFile\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Gallery on Gallery {\n    id\n    name\n    releaseDay\n    isViewable\n    contents {\n      ...GalleryContent\n    }\n  }\n"
): (typeof documents)["\n  fragment Gallery on Gallery {\n    id\n    name\n    releaseDay\n    isViewable\n    contents {\n      ...GalleryContent\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment GalleryConnection on GalleryConnection {\n    pageInfo {\n      ...PageInfo\n    }\n    edges {\n      node {\n        ...Gallery\n      }\n      cursor\n    }\n    totalCount\n  }\n"
): (typeof documents)["\n  fragment GalleryConnection on GalleryConnection {\n    pageInfo {\n      ...PageInfo\n    }\n    edges {\n      node {\n        ...Gallery\n      }\n      cursor\n    }\n    totalCount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Blog(\n    $slug: String!\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    blog(slug: $slug) {\n      id\n      posts(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        orderBy: { direction: DESC, field: START_AT }\n      ) {\n        ...BlogPostConnection\n      }\n    }\n  }\n"
): (typeof documents)["\n  query Blog(\n    $slug: String!\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    blog(slug: $slug) {\n      id\n      posts(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        orderBy: { direction: DESC, field: START_AT }\n      ) {\n        ...BlogPostConnection\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GalleryGroup(\n    $slug: String!\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    galleryGroup(slug: $slug) {\n      id\n      galleries(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        orderBy: { direction: DESC, field: START_AT }\n      ) {\n        ...GalleryConnection\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GalleryGroup(\n    $slug: String!\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    galleryGroup(slug: $slug) {\n      id\n      galleries(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        orderBy: { direction: DESC, field: START_AT }\n      ) {\n        ...GalleryConnection\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
