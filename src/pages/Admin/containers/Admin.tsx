import React, { Dispatch, useEffect, useState } from "react";

import s from "./Admin.module.scss";

import { IUser } from "./../components/User/User";
import { IField } from "./../components/FilterField/FilterField";
import { PopUp } from "./../components/PopUp/PopUp";

import { User } from "./../components/User/User";

import { FilterField } from "./../components/FilterField/FilterField";

interface Props {}

export const Admin = (props: Props) => {
  const users: IUser[] = [
    {
      name: "Бочарова Полина Григорьевна",
      registration: "13.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Пользователь",
      tariff: "Расширенный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "14.06.2021",
      role: "Администратор",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Специалист",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "15.06.2021",
      role: "Специалист",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "16.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "16.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "16.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "17.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "13.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Пользователь",
      tariff: "Расширенный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "14.06.2021",
      role: "Администратор",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Специалист",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "13.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Пользователь",
      tariff: "Расширенный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "14.06.2021",
      role: "Администратор",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Специалист",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "13.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Пользователь",
      tariff: "Расширенный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "14.06.2021",
      role: "Администратор",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Специалист",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "13.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Пользователь",
      tariff: "Расширенный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "14.06.2021",
      role: "Администратор",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Специалист",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "13.06.2021",
      role: "Пользователь",
      tariff: "Индивидуальный пакет",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Пользователь",
      tariff: "Расширенный пакет",
    },
    {
      name: "Бочарова Полина Григорьевна",
      registration: "14.06.2021",
      role: "Администратор",
    },
    {
      name: "Пупкин Иван Иванович",
      registration: "14.06.2021",
      role: "Специалист",
    },
  ];

  const filters: IField[] = [
    {
      name: "Роль",
      filters: ["Все", "Пользователь", "Специалист", "Администратор"],
    },
    {
      name: "Тип тарифа",
      filters: [
        "Все",
        "Базовый пакет",
        "Расширенный пакет",
        "Индивидуальный пакет",
      ],
    },
    { name: "test", filters: ["test1", "test2", "test3"] },
    { name: "test", filters: ["test1", "test2", "test3"] },
    { name: "test", filters: ["test1", "test2", "test3"] },
    { name: "test", filters: ["test1", "test2", "test3"] },
    { name: "test", filters: ["test1", "test2", "test3"] },
    { name: "test", filters: ["test1", "test2", "test3"] },
  ];

  const [popup, setPopup] = useState<boolean>(false);

  const [visible, setVisible] = useState<boolean>(false);

  function showFilter() {
    setVisible(!visible);
  }

  function showPopup() {
    setPopup(true);
  }

  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    if (document.documentElement.clientWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <>
      {mobile && visible && (
        <div className={s.closeIcon} onClick={showFilter}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0783 6.0003L9.71436 12.3643L16.0783 18.7282"
              stroke="#1E174D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
      <PopUp popup={popup} setPopup={setPopup} />
      <div className={s.adminPanel}>
        <div className={`${s.filter} ${visible ? "" : s.hidden}`}>
          <div className={s.container}>
            {filters.map((field, i) => (
              <FilterField field={field} key={i} />
            ))}
          </div>
        </div>
        <div className={`${s.listPanel} ${visible ? "" : s.full}`}>
          <div className={s.titleLine}>
            <div className={s.title}>
              <h3>Все пользователи</h3>
              <div className={s.counter}>
                <p>{users.length}</p>
              </div>
            </div>
            <div className={s.options}>
              <label htmlFor="search" className={s.search}>
                <div className={s.searchIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4825 11.1863L12.2376 11.5307L12.5364 11.8296L17.3499 16.643C17.4394 16.737 17.4888 16.8622 17.4877 16.9921C17.4866 17.1232 17.434 17.2486 17.3413 17.3413C17.2486 17.434 17.1232 17.4866 16.9921 17.4877C16.8622 17.4889 16.737 17.4394 16.643 17.3499L11.8306 12.5375L11.5317 12.2386L11.1873 12.4835C10.3644 13.0686 9.3964 13.4159 8.38929 13.4874C7.38217 13.5589 6.37482 13.3517 5.47761 12.8887C4.5804 12.4256 3.82796 11.7246 3.30275 10.8623C2.77753 10 2.4998 9.00978 2.5 8.00013V7.99997C2.49989 7.13437 2.70409 6.28096 3.09599 5.50915C3.48789 4.73734 4.05643 4.06893 4.75536 3.55829C5.4543 3.04764 6.26389 2.70916 7.1183 2.5704C7.97271 2.43164 8.84781 2.4965 9.67243 2.75971C10.497 3.02292 11.2479 3.47705 11.8639 4.08516C12.4799 4.69327 12.9437 5.43819 13.2175 6.25934C13.4914 7.08049 13.5675 7.95468 13.4398 8.81081C13.3121 9.66694 12.9841 10.4808 12.4825 11.1863ZM8 3.50003C6.80653 3.50003 5.66193 3.97414 4.81802 4.81805C3.97411 5.66197 3.5 6.80656 3.5 8.00003C3.5 9.19351 3.97411 10.3381 4.81802 11.182C5.66193 12.0259 6.80653 12.5 8 12.5C9.19347 12.5 10.3381 12.0259 11.182 11.182C12.0259 10.3381 12.5 9.19351 12.5 8.00003C12.5 6.80656 12.0259 5.66197 11.182 4.81805C10.3381 3.97414 9.19347 3.50003 8 3.50003Z"
                      fill="#736F8B"
                      stroke="#9895A7"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  type="text"
                  placeholder="Поиск пользователей..."
                />
              </label>
              <div className={s.panelBtns}>
                <button
                  className={`${s.button} ${s.filterBtn}`}
                  onClick={showFilter}
                >
                  <div className={s.btnText}>
                    {visible ? "Скрыть фильтры" : "Показать фильтры"}
                  </div>
                  <div className={s.btnIcon}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                        fill="#736F8B"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className={`${s.button} ${s.buttonPrimary} ${s.xlsxBtn}`}
                >
                  Выгрузить xlsx
                </button>
                <button
                  className={`${s.button} ${s.buttonPrimary} ${s.createBtn}`}
                  onClick={showPopup}
                >
                  Создать аккаунт
                </button>
              </div>
            </div>
          </div>
          <div className={s.infoBar}>
            <div className={s.name}>
              <p>Имя</p>
            </div>
            <div className={s.date}>
              <p>Дата регистрации</p>
            </div>
            <div className={s.role}>
              <p>Роль</p>
            </div>
            <div className={s.tariff}>
              <p>тариф</p>
            </div>
          </div>
          <div className={s.usersList}>
            {users.map((user, i) => (
              <User key={i} user={user} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
