import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navigation.module.css";

export default function Navigation({ links }) {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["logo"]}>
        {links.logo.url ? (
          <>
            <Image src={links.logo.url} alt="" height="50px" width="50px" />
          </>
        ) : (
          <>
            <p>Loading</p>
          </>
        )}
      </div>
      <div className={styles["nav-links"]}>
        {links.navigation_links &&
          links.navigation_links.map((link) => {
            return (
              <div key={link.display_name}>
                <Link href={link.href}>
                  <a>{link.display_name}</a>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
