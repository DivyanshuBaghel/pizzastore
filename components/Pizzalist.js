import React from 'react';
import CollectionCard from './CollectionCard'
import styles from '../styles/Pizzalist.module.css'

const Pizzalist = ({ pizzaListData , setSelectedPizza}) => {
  return (
    <div className={styles.punkList}>
      
      {pizzaListData.map(pizza => (
                  <CollectionCard 
                    
                    key={pizza.id}
                    id={pizza.id}
                    name={pizza.name}
                    price={pizza.price}
                    image={pizza.img_url} 
                  /> 
              
      ))}
    </div>
      
  )

}

export default Pizzalist;
