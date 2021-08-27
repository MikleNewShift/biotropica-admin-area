import React from "react";

import s from "./HeaderMobile.module.scss";

export const HeaderMobile = () => {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div className={s.pageTitle}>
          <p>Пользователи</p>
        </div>
        <nav className={s.burger}>
          <div className={s.burgerIcon}>
            <div className={s.topStick}></div>
            <div className={s.middleStick}></div>
            <div className={s.bottomStick}></div>
          </div>
        </nav>
      </div>
    </div>
  );
};
