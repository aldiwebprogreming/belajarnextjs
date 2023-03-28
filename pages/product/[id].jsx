import { Layout } from "@/component/Layout";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Detail({ detail }) {
  console.log(detail);
  return (
    <div>
      <Head>
        <title>Detail Product</title>
      </Head>
      <Layout>
        <h3 className={styles.font}>Detail Product</h3>
        <hr />
        <div className="card">
          <div className="row">
            <div className="col-sm-3">
              <Image
                src={"/images/book.jpg"}
                width={"200"}
                height={"200"}
                alt="img"
                className="img-tubhnail"
              ></Image>
            </div>
            <div className="col-sm-5">
              <div className="card my-3 shadow">
                <div className="container">
                  <p>Product : {detail.product}</p>
                  <p>Price : Rp.{detail.price}</p>
                  <p>Qty : {detail.qty}</p>
                </div>
              </div>
              <Link className="btn btn-primary" href={"/product"}>
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3004/posts/");
  const data = await res.json();

  const paths = data.map((detail) => ({
    params: { id: detail.id.toString() },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3004/posts/");
  const data = await res.json();

  const { id } = context.params;
  const detail = data.find((detail) => detail.id == id);

  return {
    props: {
      detail,
    },
  };
}
