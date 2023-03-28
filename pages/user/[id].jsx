import { Layout } from "@/component/Layout";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function detailUser({ detail }) {
  console.log(detail);
  return (
    <div>
      <Head>
        <title>Detail User</title>
      </Head>

      <Layout>
        <h3 className={styles.font}>Detail user</h3>
        <hr />
        <div className="card">
          <div className="row">
            <div className="col-sm-3">
              <Image
                src={"/images/user.png"}
                className="img-tubhnail"
                width={200}
                height={200}
                alt="image"
              />
            </div>
            <div className="col-sm-5 mt-2">
              <div className="card shadow">
                <div className="container">
                  <p>Nama : {detail.name} </p>
                  <p>Phone : {detail.phone} </p>
                  <p>Email : {detail.email} </p>
                  <p>Alamat : {detail.address.street}</p>
                </div>
              </div>
              <Link href={"/user"} className="btn btn-primary my-3">
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
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((detail) => ({
    params: { id: detail.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const { id } = context.params;
  const detail = data.find((detail) => detail.id == id);

  return {
    props: {
      detail,
    },
  };
}
