import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import data from "../../data/content.json";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="https://ansonyu.me/" target="_blank" rel="noopener noreferrer">
          <span>
            <Image src="/globe.svg" alt="Globe Logo" width={18} height={18} />
          </span>
        </a>
        <a
          href="https://twitter.com/ansonyuu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image
              src="/twitter.svg"
              alt="Twitter Logo"
              width={18}
              height={18}
            />
          </span>
        </a>
        <a
          href="https://github.com/ansonyuu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image src="/github.svg" alt="Github Logo" width={18} height={18} />
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
