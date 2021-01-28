/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import Head from "next/head";
import styles from "./layout.module.css";
import NavBar from "./nav/NavBar";

const previewImage = "";
export const siteTitle = "Freelancer starter";
export const url = "https://freelancer.vercel.app/";
export const description = "Freelancer starter kit";

export default function Layout({ children, description }) {
  return (
    <div className={styles.layout}>
      <Head>
        <meta property="og:locale" content="en_GB" />
        <meta name="description" content={description} />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <NavBar />
      <div className={styles.main}>{children}</div>
    </div>
  );
}
