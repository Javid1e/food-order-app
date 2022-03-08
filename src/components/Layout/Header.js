import React, { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (prps) => {
    return(
        <Fragment>
            <header className={styles.header}>
                <h1>React Mals</h1>
                <button>Cart</button>
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImage} alt="A Table Full Of Delicious Food!"/>
            </div>
        </Fragment>
    );
};
export default Header;
