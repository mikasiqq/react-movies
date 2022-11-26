import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to="/">
            <img width={40} height={40} src="/images/cinema.png" alt="Logo" />
            <h3>Movies React</h3>
          </Link>
        </div>
        <nav className={classes.nav}>
          <Link to="/" className={classes.active}>
            Расписание
          </Link>
          <Link to="/">Скоро в кино</Link>
          <Link to="/">Акции и новости</Link>
          <Link to="/">Кинотеатр</Link>
        </nav>
        <div className={classes.links}>
          <Link to="/">+7 (4855) 23-88-14</Link>
          <Link to='/orders'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="rgb(184, 184, 184)"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" />
                  <path d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                </g>
              </g>
            </svg>
          </Link>
        </div>
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
