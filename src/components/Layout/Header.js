import React, { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return(
        <Fragment>
            <header className={styles.header}>
                <h1>React Maels</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImage} alt="A Table Full Of Delicious Food!"/>
            </div>
        </Fragment>
    );
};
export default Header;
