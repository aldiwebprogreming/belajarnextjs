import { Layout } from "@/component/Layout";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";

export default function Post() {
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>
      <Layout>
        <h3 className={styles.font}>Halaman Post</h3>
      </Layout>
    </div>
  );
}
