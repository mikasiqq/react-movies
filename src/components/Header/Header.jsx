import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  const [active, setActive] = useState("a1");

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link onClick={() => setActive("a1")} to="/">
            <img width={40} height={40} src="/images/cinema.png" alt="Logo" />
            <h3>Movies React</h3>
          </Link>
        </div>
        <nav className={classes.nav}>
          <Link
            onClick={() => setActive("a1")}
            to="/"
            className={active === "a1" ? classes.active : ""}
          >
            Расписание
          </Link>
          <Link
            onClick={() => setActive("a2")}
            to="/upcoming"
            className={active === "a2" ? classes.active : ""}
          >
            Скоро в кино
          </Link>
          <Link
            onClick={() => setActive("a3")}
            to="/orders"
            className={active === "a3" ? classes.active : ""}
          >
            Мои билеты
          </Link>
        </nav>
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
