import Head from 'next/head'
import Image from 'next/image'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Pizzalist from '../components/Pizzalist';
import styles from '../styles/Home.module.css'
import Main from '../components/Main';

export default function Home() {
  const [pizzaListData, setPizzaListData]= useState([])
  const [selectedPizza, setSelectedPizza]= useState(0)

  useEffect(()=> {
    const url ='https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68'
    const getMyPizza = async () =>{
      const pizzaData = await axios.get(url)
        console.log(pizzaData.data)
        setPizzaListData(pizzaData.data)
    } 
    return getMyPizza()

  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaStore</title>
        <meta name="description" content="Get your pizza at discount." />
        <link rel="icon" href="" />
      </Head>

      {pizzaListData.length > 0 && (
      <>
        <Main pizzaListData={pizzaListData} selectedPizza={selectedPizza}/>                
        <Pizzalist 
          pizzaListData={pizzaListData} 
          setSelectedPizza={setSelectedPizza}
        />

      </>
    )}    
      
    </div>
  )
}
