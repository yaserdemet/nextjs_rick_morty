import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Cards';
import styles from '../styles/Home.module.css'

export default function Home({ character }) {
  console.log(character);
  return (
    <div className={styles.container}>
      
          <Cards character = {character}/>
     
    </div>
    
  )
}

export const getStaticProps = async () => {
// ?  getStaticProps sadece pages lerde import edilir.

  const url = "https://rickandmortyapi.com/api/character/";
  const data = await fetch(url);
  const response = await data.json();

  return {
    props : {

      character : response

    }
  }

}