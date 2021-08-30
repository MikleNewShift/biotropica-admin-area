import React, { useState } from "react";

import s from "./User.module.scss";

export interface IUser {
  name: string;
  registration: string;
  role: string;
  tariff?: string;
}

interface Props {
  user: IUser;
}

export const User = ({ user }: Props) => {
  const [visible, setVisible] = useState(false);

  function showPopUp() {
    setVisible(!visible);
  }

  return (
    <div className={s.user}>
      <div className={s.name}>
        <p>{user.name}</p>
      </div>
      <div className={s.date}>
        <p>{user.registration}</p>
      </div>
      <div className={s.role}>
        <p
          style={
            user.role == "Специалист"
              ? { color: "#309A74" }
              : user.role == "Администратор"
              ? { color: "#D06361" }
              : {}
          }
        >
          {user.role}
        </p>
      </div>
      <div className={s.tariff}>
        <p>{user.tariff}</p>
      </div>

      <div className={s.dots} onClick={showPopUp}>
        <svg
          style={visible ? { transform: "rotate(0deg)" } : {}}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16665 10.0001H4.17498M9.99998 10.0001H10.0083M15.8333 10.0001H15.8416M4.99998 10.0001C4.99998 10.2211 4.91218 10.4331 4.7559 10.5893C4.59962 10.7456 4.38766 10.8334 4.16665 10.8334C3.94563 10.8334 3.73367 10.7456 3.57739 10.5893C3.42111 10.4331 3.33331 10.2211 3.33331 10.0001C3.33331 9.77907 3.42111 9.56711 3.57739 9.41083C3.73367 9.25455 3.94563 9.16675 4.16665 9.16675C4.38766 9.16675 4.59962 9.25455 4.7559 9.41083C4.91218 9.56711 4.99998 9.77907 4.99998 10.0001ZM10.8333 10.0001C10.8333 10.2211 10.7455 10.4331 10.5892 10.5893C10.433 10.7456 10.221 10.8334 9.99998 10.8334C9.77897 10.8334 9.567 10.7456 9.41072 10.5893C9.25444 10.4331 9.16665 10.2211 9.16665 10.0001C9.16665 9.77907 9.25444 9.56711 9.41072 9.41083C9.567 9.25455 9.77897 9.16675 9.99998 9.16675C10.221 9.16675 10.433 9.25455 10.5892 9.41083C10.7455 9.56711 10.8333 9.77907 10.8333 10.0001ZM16.6666 10.0001C16.6666 10.2211 16.5788 10.4331 16.4226 10.5893C16.2663 10.7456 16.0543 10.8334 15.8333 10.8334C15.6123 10.8334 15.4003 10.7456 15.2441 10.5893C15.0878 10.4331 15 10.2211 15 10.0001C15 9.77907 15.0878 9.56711 15.2441 9.41083C15.4003 9.25455 15.6123 9.16675 15.8333 9.16675C16.0543 9.16675 16.2663 9.25455 16.4226 9.41083C16.5788 9.56711 16.6666 9.77907 16.6666 10.0001Z"
            stroke="#736F8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {visible && <PopUp />}
    </div>
  );
};

const PopUp = () => {
  return (
    <div className={s.popup}>
      <div className={s.element}>
        <p>Заблокировать</p>
      </div>
      <div className={s.element}>
        <p>Написать</p>
      </div>
    </div>
  );
};
