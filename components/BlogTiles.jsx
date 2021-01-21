import Image from "next/image";
import Paragraph from "./Paragraph";
import styles from "../styles/tiles.module.css";

export default function BlogTiles(blog) {
  return (
    <div className={styles["tiles"]}>
      <Image
        src={blog.blog_image.url}
        alt="Blog Image"
        width="400px"
        height="400px"
      />
      <Paragraph>{blog.title}</Paragraph>
      <Paragraph>By: {blog.author_details}</Paragraph>
      <p className={styles["read-me"]} onClick={blog.renderBlog} id={blog.uid}>
        Read Me
      </p>
    </div>
  );
}
