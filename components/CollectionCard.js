import React from 'react';
import styles from '../styles/CollectionCard.module.css'
import Image from 'next/image';

const CollectionCard = ({id , name , price , image} ) => {
  return (
    <div className={styles.collectionCard}>
      <img className={styles.img} src={image} alt=''/>
      <div className={styles.details}>
        <div className={styles.name}>
          {name} <div className={styles.id}>id: {id}</div> 
        </div>

        <div className={styles.priceContainer}>
          <div className={styles.price}>Price: {price} rs</div>
        </div>
      </div>
    </div>
  )
};

export default CollectionCard;
