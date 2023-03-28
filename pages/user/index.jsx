import { Layout } from "@/component/Layout";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context) {
  //   console.log(context);
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { data },
  };
}

export default function User({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>User</title>
      </Head>
      <Layout>
        <h3 className={styles.font}>Data User</h3>
        <hr />
        <div className="row">
          {data.map((list) => (
            <div className="col-sm-3" key={list.id}>
              <div class="card mb-3 shadow">
                <Image
                  class="card-img-top"
                  src="/images/user.png"
                  alt="Card image cap"
                  width={200}
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title">{list.name}</h5>
                  <p className="card-text">{list.company.catchPhrase}</p>
                  <Link href={`user/${list.id}`} className="btn btn-primary">
                    Detail user
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
