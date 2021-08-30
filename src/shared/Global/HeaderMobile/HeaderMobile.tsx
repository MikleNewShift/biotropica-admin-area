import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setSourceMapRange } from "typescript";

import s from "./HeaderMobile.module.scss";

interface Props {
  burger: boolean;
  setBurger: Dispatch<SetStateAction<boolean>>;
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

export const HeaderMobile = ({ burger, setBurger, page, setPage }: Props) => {
  function showBurger() {
    setBurger(!burger);
  }

  const pages = [
    {
      name: "Пользователи",
      link: "/",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.14292 8.50146V14.2182"
            stroke="#1E174D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0316 5.76562V14.2179"
            stroke="#1E174D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.8572 11.5225V14.2183"
            stroke="#1E174D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M13.9047 1.6665H6.0952C3.37298 1.6665 1.66663 3.59324 1.66663 6.3208V13.6789C1.66663 16.4064 3.36504 18.3332 6.0952 18.3332H13.9047C16.6349 18.3332 18.3333 16.4064 18.3333 13.6789V6.3208C18.3333 3.59324 16.6349 1.6665 13.9047 1.6665Z"
            stroke="#1E174D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "События",
      link: "/logs",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.1801 13.0167C13.1801 14.6775 12.0485 15.8508 10.2385 15.8508H5.05762C3.24929 15.8508 2.12512 14.6775 2.12512 13.0167V7.21667C2.12512 5.55667 3.24929 4.375 5.06679 4.375H10.2385C12.0485 4.375 13.1801 5.55667 13.1801 7.21667V13.0167Z"
            stroke="#1E174D"
            stroke-Wdth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.1801 9.39733L16.5942 6.60233C17.1359 6.1565 17.9584 6.544 17.9584 7.24983V12.9765C17.9584 13.6832 17.1359 14.069 16.5942 13.624L13.1801 10.829"
            stroke="#1E174D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Чат",
      link: "/admin",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.058 2.0002C8.54635 1.98609 5.28554 3.80697 3.46059 6.80006C1.63541 9.79355 1.51288 13.5226 3.13765 16.6291L3.32147 16.9875C3.39175 17.1192 3.40531 17.2613 3.36458 17.3926C3.10204 18.0864 2.87136 18.8357 2.6873 19.5969L2.66776 19.7609C2.66776 20.5263 3.07616 21.0522 3.88671 21.0342L4.02167 21.018C4.75798 20.8554 5.4831 20.6459 6.19261 20.3908C6.28665 20.3671 6.4407 20.3763 6.57971 20.4332L7.26224 20.8194C7.26378 20.8242 7.26493 20.8277 7.27208 20.8319L7.31788 20.8479C10.9929 22.7803 15.4812 22.2472 18.5997 19.5078C21.7187 16.7681 22.8199 12.3901 21.3675 8.50383C19.9153 4.61799 16.2115 2.03073 12.058 2.0002ZM11.7675 3.39899L12.0484 3.39459C15.6231 3.42178 18.8109 5.64858 20.0605 8.99231C21.31 12.3357 20.3626 16.1021 17.6788 18.4595L17.4587 18.6466C14.8626 20.778 11.2582 21.2076 8.23269 19.7467L7.94496 19.6025L7.95729 19.6042L7.93909 19.5992L7.51677 19.3569C7.36471 19.2709 7.24408 19.2058 7.14685 19.159C6.6837 18.9681 6.21354 18.9399 5.77133 19.0617L5.35272 19.2055C5.07605 19.2968 4.80372 19.3794 4.53273 19.4541L4.13767 19.5573L4.04356 19.9249C4.21419 19.2192 4.42804 18.5246 4.68389 17.8451C4.84853 17.3182 4.79818 16.7905 4.55755 16.3402L4.37662 15.9873C2.97627 13.3098 3.08168 10.1019 4.65196 7.52645C6.17338 5.03117 8.85494 3.48232 11.7675 3.39899ZM6.4746 12.0002C6.4746 11.37 6.98586 10.8595 7.61596 10.8595C8.24606 10.8595 8.75732 11.37 8.75732 12.0002C8.75732 12.6304 8.24606 13.1408 7.61596 13.1408C6.98586 13.1408 6.4746 12.6304 6.4746 12.0002ZM10.9115 12.0002C10.9115 11.37 11.4227 10.8595 12.0528 10.8595C12.6829 10.8595 13.1942 11.37 13.1942 12.0002C13.1942 12.6304 12.6829 13.1408 12.0528 13.1408C11.4227 13.1408 10.9115 12.6304 10.9115 12.0002ZM16.4897 10.8595C15.8596 10.8595 15.3484 11.37 15.3484 12.0002C15.3484 12.6304 15.8596 13.1408 16.4897 13.1408C17.1198 13.1408 17.6311 12.6304 17.6311 12.0002C17.6311 11.37 17.1198 10.8595 16.4897 10.8595Z"
            fill="#1E174D"
          />
        </svg>
      ),
    },
    {
      name: "Выход",
      link: "/admin",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
            stroke="#1E174D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3334 14.1663L17.5 9.99967L13.3334 5.83301"
            stroke="#1E174D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 10H7.5"
            stroke="#1E174D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div
        className={s.header}
        style={burger ? { backgroundColor: "#fff" } : {}}
      >
        <div className={s.wrapper}>
          <div className={s.pageTitle}>
            <p>{page}</p>
          </div>
          <nav className={s.burger} onClick={showBurger}>
            <div className={`${s.burgerIcon} ${burger ? s.burgerActive : ""}`}>
              <div className={s.topStick}></div>
              <div className={s.middleStick}></div>
              <div className={s.bottomStick}></div>
            </div>
          </nav>
        </div>
      </div>
      <div className={`${s.burgerMenu} ${burger ? s.burgerActive : ""}`}>
        <div className={s.container}>
          <Link
            to="/profile"
            onClick={() => {
              setPage("Профиль");
            }}
            className={s.userInfo}
          >
            <div className={s.photo}>
              <img
                src="https://images.unsplash.com/photo-1608731294828-d4023daac5ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                alt=""
              />
            </div>
            <div className={s.name}>
              <p>Василий Пупкин</p>
            </div>
          </Link>

          <nav className={s.burgerNav}>
            {pages.map((page) => (
              <Link
                onClick={() => {
                  setPage(page.name);
                }}
                className={s.link}
                to={page.link}
              >
                <div className={s.icon}>{page.icon}</div>
                <p>{page.name}</p>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
