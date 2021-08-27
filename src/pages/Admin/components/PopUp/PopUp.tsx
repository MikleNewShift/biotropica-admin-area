import React, { Dispatch, SetStateAction, useState } from "react";

import s from "./PopUp.module.scss";

interface Props {
  setPopup: Dispatch<SetStateAction<boolean>>;
  popup: boolean;
}

export const PopUp = ({ setPopup, popup }: Props) => {
  function closePopUp() {
    setPopup(false);
  }

  const [dropdown, setDropdown] = useState(false);

  function showDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <div className={`${s.popupBg} ${popup ? "" : s.hidden}`}>
      <form className={s.popup}>
        <div className={s.title}>
          <h2>Новый пользователь</h2>
        </div>
        <div className={s.divider}></div>
        <div className={s.inputs}>
          <div className={s.input}>
            <p>ФИО</p>
            <input
              type="text"
              name="newUser"
              id=""
              placeholder="Введите полное имя"
            />
          </div>
          <div className={s.input}>
            <p>Электронный адрес</p>
            <input
              type="email"
              name="newUser"
              id=""
              placeholder="Электронный адрес"
            />
          </div>
          <div className={s.input}>
            <p>Номер телефона</p>
            <input
              type="text"
              name="newUser"
              id=""
              placeholder="Введите номер телефона"
            />
          </div>
          <div className={s.input}>
            <p>Роль</p>
            <div className={s.dropdown} onClick={showDropdown}>
              <div
                className={`${s.dropdownText}`}
                style={dropdown ? { borderTop: "1px solid #736f8b" } : {}}
              >
                <p>Роль</p>
                <div className="icon">
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 1.5L8 8.5L1 1.5"
                      stroke="#9895A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`${s.dropdownConteiner} ${dropdown ? "" : s.hidden}`}
              >
                <div className={s.dropdownElement}>
                  <p>Специалист</p>
                </div>
                <div className={s.dropdownElement}>
                  <p>Администратор</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.btns}>
          <button className={`${s.button} ${s.buttonPrimary} ${s.saveBtn}`}>
            <p>Сохранить</p>
          </button>
          <button
            type="button"
            className={`${s.button} ${s.buttonPrimary} ${s.cancelBtn}`}
            onClick={closePopUp}
          >
            <p>Отмена</p>
          </button>
        </div>
      </form>
    </div>
  );
};
