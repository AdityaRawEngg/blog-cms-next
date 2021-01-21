import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";
export default function Footer({ footer }) {
  return (
    <div className={styles["footer"]}>
      <Image src={footer.logo.url} alt="Logo" height="50px" width="50px" />
      <div className={styles["footer-links"]}>
        {footer.footer_links &&
          footer.footer_links.map((link) => {
            return (
              <Link key={link.title} href={link.href}>
                <a>{link.title}</a>
              </Link>
            );
          })}
      </div>
      <div className={styles["footer-media"]}>
        {footer.social_media_links &&
          footer.social_media_links.map((link) => {
            return (
              <Link key={link.url} href={link.url}>
                <a>
                  <Image
                    src={link.logo.url}
                    alt="Media logo"
                    height="50px"
                    width="50px"
                  />
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
