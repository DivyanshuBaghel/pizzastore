import React, { useEffect, useState } from 'react';
import styles from '../styles/Main.module.css'

const Main = ({ selectedPizza, pizzaListData }) => {
    const [activePizza, setActivePizza] = useState(pizzaListData[selectedPizza])

    useEffect(()=>{
        setActivePizza(pizzaListData[selectedPizza])

    },[pizzaListData, selectedPizza])

  return (
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.punkHighLight}>
                        <div className={styles.punkContainer}>
                        <img 
                            className={styles.selectedPunk}
                            src={activePizza.img_url}
                            alt=''
                        />    
                        </div>
                    </div> 

                    <div className={styles.punkDetails} style={{color: '#fff'}}>
                        <div className={styles.title}> {activePizza.name}   
                            <span className={styles.itemNumber}>.#{activePizza.id}</span>
                        </div>
                    </div>
                    <div>
                    <div className={styles.description}>{activePizza.description}</div>
                    <div className={styles.description}>Rating : {activePizza.rating}</div>
                    </div>
                </div>
            </div>
        );
    };

export default Main;
