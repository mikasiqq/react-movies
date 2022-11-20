import React, { Fragment } from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <a href="/">
            <img width={40} height={40} src="/images/cinema.png" alt="Logo" />
            <h3>Movies React</h3>
          </a>
        </div>
        <nav className={classes.nav}>
          <a href="/" className={classes.active}>Расписание</a>
          <a href="/">Скоро в кино</a>
          <a href="/">Акции и новости</a>
          <a href="/">Кинотеатр</a>
        </nav>
        <a href="/">+7 (4855) 23-88-14</a>
      </div>
      <div className={classes.dropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 0 24 24"
          width="18px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        <span>г. Москва</span>
      </div>
    </header>
  );
};

export default Header;
