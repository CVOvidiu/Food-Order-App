import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of food." />
      </div>
    </Fragment>
  );
};

export default Header;