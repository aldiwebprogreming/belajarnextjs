import React from "react";
import Head from "next/head";
import { Layout } from "@/component/Layout";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

// belajar get statict props

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3004/posts/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function product({ data }) {
  //   console.log(data);
  return (
    <div>
      <Head>
        <title>Product</title>
      </Head>
      <Layout>
        <h3 className={styles.font}>Data Product</h3>
        <hr />
        <div className="row">
          {data.map((list) => (
            <div className="col-sm-3" key={list.id}>
              <div className="card shadow">
                <Image
                  className="card-img-top"
                  src={"/images/book.jpg"}
                  alt="Card image cap"
                  width={200}
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title">{list.product}</h5>
                  <p className="card-text">{list.harga}</p>
                  <p className="card-text">{list.qty} qty</p>
                  <Link
                    href={`product/${list.id}`}
                    className="btn btn-primary btn-block"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}
