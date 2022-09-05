import React from 'react'
import Head from "next/head";
import Image from "next/image";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout"


const main = ({ character }) => {
  return (
  <Layout>
    <Head>
      <title>Main</title>
      <link rel="shortcut icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIkGpmypTxbmM5WrEA4LDpEfvfcQvgoP1bg&usqp=CAU" type="image/x-icon" />
    </Head>

<div className={`styles.container `}>
    <Cards character={character} />
  </div>

  </Layout>

  )
}

export default main


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
  