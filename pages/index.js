import Head from "next/head";
import Image from "next/image";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout"
export default function Home({ character }) {
  console.log(character);
  return (
    <Layout>
      <div className={styles.container}>
        <Cards character={character} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  // ?  getStaticProps sadece pages lerde import edilir.

  const url = "https://rickandmortyapi.com/api/character/";

  const data = await fetch(url);
  const response = await data.json();

  return {
    props: {
      character: response,
    },
  };
};
