import React from "react";
import { Link } from "react-router-dom";

import errorImg from "../../../assets/illustration.svg";

import s from "./ErrorPage.module.scss";

interface Props {}

export const ErrorPage = (props: Props) => {
  return (
    <div className={s.errorPage}>
      <div className={s.img}>
        <img src={errorImg} alt="" />
      </div>
      <div className={s.content}>
        <div className={s.title}>
          <h2>Упс... Такой страницы нет</h2>
        </div>
        <div className={s.text}>
          <p>
            Вы зашли на несуществующую страницу.
            <br /> Вернитесь на <Link to="/">главную</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
