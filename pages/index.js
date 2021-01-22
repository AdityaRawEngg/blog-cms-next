import BlogTiles from "../components/BlogTiles";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { getLinks } from "../helper/getLinks";
import { getAllEntries } from "../helper/getBlogData";
import { getStaticProps } from "./blog/[id]";

export default function Home({ blogList, links, footer }) {
  const router = useRouter();
  const renderBlog = (event) => {
    router.push(`/blog/${event.target.id}`);
  };
  return (
    <>
      <Navigation links={links} />
      <div className={styles["section"]}>
        {blogList.length !== "0" &&
          blogList.map((blog) => (
            <BlogTiles key={blog.uid} renderBlog={renderBlog} {...blog} />
          ))}
      </div>
      <Footer footer={footer} />
    </>
  );
}

export async function getServerSideProps(context) {
  const blogList = await getAllEntries();
  const links = await getLinks("navigation_aditya");
  const footer = await getLinks("footer_aditya");

  return {
    props: { blogList: blogList, links: links, footer: footer },
  };
}
