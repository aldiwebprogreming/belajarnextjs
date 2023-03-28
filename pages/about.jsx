import Head from "next/head";
import { Layout } from "@/component/Layout";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

import React from "react";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <h3 className={styles.font}>about</h3>
        {/* <img
          src="http://4.bp.blogspot.com/-0iewOUteV-8/VMHJst2-VjI/AAAAAAAAKXw/iIfhIo6fJPU/s1600/Gambar%2BKura-Kura.Zoozon.blogspot%2B(14).jpg"
          width={"100"}
          height={"100"}
        /> */}
        <Image
          src={
            "http://4.bp.blogspot.com/-0iewOUteV-8/VMHJst2-VjI/AAAAAAAAKXw/iIfhIo6fJPU/s1600/Gambar%2BKura-Kura.Zoozon.blogspot%2B(14).jpg"
          }
          alt=""
          width={"100"}
          height={"100"}
        />
      </Layout>
    </div>
  );
}
