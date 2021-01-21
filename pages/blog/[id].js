import { useRouter } from "next/router";
import { getSingleEntry, getAllEntries } from "../../helper/getBlogData";
import { getLinks } from "../../helper/getLinks";
import BlogImage from "../../components/BlogImage";
import BlogHeading from "../../components/BlogHeading";
import BlogContent from "../../components/BlogContent";
import Aside from "../../components/Aside";
import styles from "../../styles/blogDetails.module.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function blogId({ blog, links, footer }) {
  const router = useRouter();
  const renderBlog = (event) => {
    if (event.target.parentNode.id) {
      router.push(`/blog/${event.target.parentNode.id}`);
    }
  };
  return (
    <>
      {blog.blog_image && blog.content && blog.related_links ? (
        <>
          {" "}
          <Navigation links={links} />
          <div className={styles["blog"]}>
            <div className={styles["blog-details"]}>
              <BlogHeading
                title={blog.title}
                author={blog.author_details}
                className={styles["blog-heading"]}
              />
              <BlogImage
                className={styles["blog-image"]}
                imageUrl={blog.blog_image.url}
              />
              <BlogContent
                className={styles["blog-content"]}
                contents={blog.content}
              />
            </div>
            <div className={styles["related-links"]}>
              <h1>Related Links</h1>
              <aside className={styles["aside"]}>
                {blog.related_links &&
                  blog.related_links.map((link) => (
                    <Aside
                      renderBlog={renderBlog}
                      className={styles["link-tile"]}
                      key={link.uid}
                      id={link.uid}
                      title={link.title}
                      image={link.blog_image.url}
                    />
                  ))}
              </aside>
            </div>
          </div>
          <Footer footer={footer} />
        </>
      ) : (
        <>
          <img
            src="https://i.pinimg.com/736x/61/ea/94/61ea94b38db7f292dcf6dda1513b8253.jpg"
            alt="Loading Image"
            style={{ margin: "auto" }}
          />
        </>
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  let blogList = await getAllEntries();
  let paths = blogList.map((blog) => {
    return {
      params: {
        id: `${blog.uid}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const blog = await getSingleEntry(params.id);
  const links = await getLinks("navigation_aditya");
  const footer = await getLinks("footer_aditya");
  return {
    props: { blog: blog, links: links, footer: footer },
  };
}
