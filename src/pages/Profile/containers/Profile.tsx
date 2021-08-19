import React from "react";

import s from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.photo}>
        <img
          src="https://images.unsplash.com/photo-1608731294828-d4023daac5ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt=""
        />
      </div>
      <div className={s.personalData}>
        <div className={s.title}>
          <p>Личные данные</p>
        </div>
        <div className={s.form}>
          <div className={s.input}>
            <div className={s.inputTitle}>
              <p>Имя</p>
            </div>
            <input type="text" placeholder="Имя" />
          </div>
          <div className={s.input}>
            <div className={s.inputTitle}>
              <p>Фамилия</p>
            </div>
            <input type="text" placeholder="Фамилия" />
          </div>
          <div className={s.input}>
            <div className={s.inputTitle}>
              <p>Почта</p>
            </div>
            <input type="text" placeholder="Почта" />
          </div>
          <div className={s.input}>
            <div className={s.inputTitle}>
              <p>Телефон</p>
            </div>
            <input type="text" placeholder="+7 (999) 653-32-23" />
          </div>
          <div className={s.buttons}>
            <button type="submit" className={`${s.button} ${s.buttonPrimary}`}>
              Сохранить
            </button>
            <button className={`${s.button} ${s.buttonPrimary}`}>Отмена</button>
          </div>
        </div>
      </div>
      <div className={s.security}>
        <div className={s.title}>
          <p>Безопасность</p>
        </div>
        <div className={s.form}>
          <div className={s.input}>
            <div className={s.inputTitle}>
              <p>Введите пароль</p>
            </div>
            <input type="text" placeholder="Введите пароль" />
          </div>
          <div className={s.input}>
            <div className={s.inputTitle}>
              <p>Введите новый пароль</p>
            </div>
            <input type="text" placeholder="Введите новый пароль" />
          </div>
          <div className={s.input}>
            <div className={s.inputTitle}>
              <p>Повторите новый пароль</p>
            </div>
            <input type="text" placeholder="Повторите новый пароль" />
          </div>
          <div className={s.buttons}>
            <button type="submit" className={`${s.button} ${s.buttonPrimary}`}>
              Сохранить
            </button>
            <button className={`${s.button} ${s.buttonPrimary}`}>Отмена</button>
          </div>
        </div>
      </div>
    </div>
  );
};
