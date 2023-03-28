import { useRouter } from "next/router";
import { Layout } from "@/component/Layout";
import styles from "@/styles/Home.module.css";

export default function Detail({ post }) {
  console.log(post);
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Layout>
        <h3 className={styles.font}>Halaman post dengan id : {id}</h3>
        <h3>Detail - {post.id}</h3>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const getPosts = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await getPosts.json();

  // const filteredPosts = posts.filter((post) => post.id.toString() !== "5");
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //   console.log(context);
  const getPosts = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await getPosts.json();

  const { id } = context.params;
  const post = posts.find((post) => post.id == id);

  return {
    props: { post },
  };
}
