import React from 'react'
import Image from 'next/image';
import styles from "../styles/Navbar.module.css";
import storeIcon from "../public/restaurant.png"
import cartIcon from "../public/icons8-cart-64.png"

const Navbar = () => {
  return (
    <><div className={styles.container}>
          <div className={styles.brand}>
              <div className={styles.storeIconContainer}>
                  <Image src={storeIcon} alt="" height={60} width={60} />
              </div>
              <div className={styles.texts}>
                  <h1 className={styles.text}>PizzaStore</h1>
                  <div className={styles.text}>Fill your self</div>
              </div>
          </div>

          <div className={styles.menuItemContainer}>
              <div className={styles.menuItem}>
                  <a className={styles.menuLink}>Home</a>
                  <a className={styles.menuLink}>Products</a>
                  <a className={styles.menuLink}>Events</a>
                  <a className={styles.menuLink}>About</a>
                  <a className={styles.menuLink}>Contacts</a>

              </div>
          </div>

          <div className={styles.cartIconContainer}>
              <Image src={cartIcon} alt="" height={40} width={40} />
          </div>
      </div>
          </>
  )
}

export default Navbar