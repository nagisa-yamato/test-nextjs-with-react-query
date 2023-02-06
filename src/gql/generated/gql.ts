/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  fragment PageInfoFragment on PageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n": types.PageInfoFragmentFragmentDoc,
    "\n  fragment GalleryContentFragment on GalleryContent {\n    id\n    contentFile {\n      id\n      url\n      alternativeContent\n    }\n  }\n": types.GalleryContentFragmentFragmentDoc,
    "\n  fragment GalleryFragment on Gallery {\n    id\n    name\n    releaseDay\n    isViewable\n    contents {\n      ...GalleryContentFragment\n    }\n  }\n": types.GalleryFragmentFragmentDoc,
    "\n  fragment GalleryConnectionFragment on GalleryConnection {\n    pageInfo {\n      ...PageInfoFragment\n    }\n    edges {\n      node {\n        ...GalleryFragment\n      }\n      cursor\n    }\n    totalCount\n  }\n": types.GalleryConnectionFragmentFragmentDoc,
    "\n  query getCharacters($page: Int) {\n    characters(page: $page) {\n      info {\n        count\n        next\n        pages\n        prev\n      }\n      results {\n        id\n        image\n        name\n      }\n    }\n  }\n": types.GetCharactersDocument,
    "\n  query getGalleryGroup(\n    $slug: String!\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    galleryGroup(slug: $slug) {\n      id\n      galleries(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        orderBy: { direction: ASC, field: START_AT }\n      ) {\n        ...GalleryConnectionFragment\n      }\n    }\n  }\n": types.GetGalleryGroupDocument,
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
export function graphql(source: "\n  fragment PageInfoFragment on PageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n"): (typeof documents)["\n  fragment PageInfoFragment on PageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment GalleryContentFragment on GalleryContent {\n    id\n    contentFile {\n      id\n      url\n      alternativeContent\n    }\n  }\n"): (typeof documents)["\n  fragment GalleryContentFragment on GalleryContent {\n    id\n    contentFile {\n      id\n      url\n      alternativeContent\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment GalleryFragment on Gallery {\n    id\n    name\n    releaseDay\n    isViewable\n    contents {\n      ...GalleryContentFragment\n    }\n  }\n"): (typeof documents)["\n  fragment GalleryFragment on Gallery {\n    id\n    name\n    releaseDay\n    isViewable\n    contents {\n      ...GalleryContentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment GalleryConnectionFragment on GalleryConnection {\n    pageInfo {\n      ...PageInfoFragment\n    }\n    edges {\n      node {\n        ...GalleryFragment\n      }\n      cursor\n    }\n    totalCount\n  }\n"): (typeof documents)["\n  fragment GalleryConnectionFragment on GalleryConnection {\n    pageInfo {\n      ...PageInfoFragment\n    }\n    edges {\n      node {\n        ...GalleryFragment\n      }\n      cursor\n    }\n    totalCount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCharacters($page: Int) {\n    characters(page: $page) {\n      info {\n        count\n        next\n        pages\n        prev\n      }\n      results {\n        id\n        image\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCharacters($page: Int) {\n    characters(page: $page) {\n      info {\n        count\n        next\n        pages\n        prev\n      }\n      results {\n        id\n        image\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getGalleryGroup(\n    $slug: String!\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    galleryGroup(slug: $slug) {\n      id\n      galleries(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        orderBy: { direction: ASC, field: START_AT }\n      ) {\n        ...GalleryConnectionFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query getGalleryGroup(\n    $slug: String!\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    galleryGroup(slug: $slug) {\n      id\n      galleries(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        orderBy: { direction: ASC, field: START_AT }\n      ) {\n        ...GalleryConnectionFragment\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;