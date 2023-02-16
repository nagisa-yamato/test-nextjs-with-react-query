import {
  BlogCategoryFragment,
  BlogPostFragment,
} from "@/graphql/fragments/blog";
import { SharedFileFragment } from "@/graphql/fragments/common";
import { FragmentType, useFragment } from "@/graphql/generated";
import { Article, StyledImage } from "./BlogArticle.styles";

const BlogArticle = ({
  blogPost,
}: {
  blogPost: FragmentType<typeof BlogPostFragment>;
}) => {
  const blogPostFragment = useFragment(BlogPostFragment, blogPost);
  const blogCategoryFragment = useFragment(
    BlogCategoryFragment,
    blogPostFragment.category
  );
  const sharedFileFragment = useFragment(
    SharedFileFragment,
    blogPostFragment.thumbnailFile
  );

  return (
    <Article>
      <hgroup>
        <h2>{blogPostFragment.subject}</h2>
        <p>{blogCategoryFragment?.name}</p>
      </hgroup>
      {sharedFileFragment && (
        <StyledImage
          src={sharedFileFragment.url}
          alt={sharedFileFragment.alternativeContent}
          width={300}
          height={300}
        />
      )}
    </Article>
  );
};

export default BlogArticle;
