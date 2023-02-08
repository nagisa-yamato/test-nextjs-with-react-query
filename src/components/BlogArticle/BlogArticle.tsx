import { BlogCategoryFragment, BlogPostFragment } from "@/gql/fragments/blog";
import { SharedFileFragment } from "@/gql/fragments/common";
import { FragmentType, useFragment } from "@/gql/generated";
import Image from "next/image";
import styles from "./BlogArticle.module.css";

const BlogArticle = ({
  blogPost,
}: {
  blogPost: FragmentType<typeof BlogPostFragment>;
}) => {
  /* eslint-disable react-hooks/rules-of-hooks */
  const blogPostFragment = useFragment(BlogPostFragment, blogPost);
  const blogCategoryFragment = useFragment(
    BlogCategoryFragment,
    blogPostFragment.category
  );
  const sharedFileFragment = useFragment(
    SharedFileFragment,
    blogPostFragment.thumbnailFile
  );
  /* eslint-enable */

  return (
    <article className={styles.article}>
      <hgroup>
        <h2>{blogPostFragment.subject}</h2>
        <p>{blogCategoryFragment?.name}</p>
      </hgroup>
      {sharedFileFragment && (
        <Image
          src={sharedFileFragment.url}
          alt={sharedFileFragment.alternativeContent}
          width={300}
          height={300}
          className={styles.image}
        />
      )}
    </article>
  );
};

export default BlogArticle;
