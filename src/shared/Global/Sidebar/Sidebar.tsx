import classNames from "classnames";
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchSignout } from "../../../store/ducks/user/actionCreators";

import s from "./Sidebar.module.scss";

interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

interface Pages {
  page: string;
  link: string;
}
interface Nav extends Pages {
  svg: ReactElement;
}

export const Sidebar = ({ setPage }: Props) => {
  const pages = [
    { page: "Профиль", link: "/profile" },
    { page: "Пользователи", link: "/" },
    { page: "Видеоконсультации", link: "/video" },
  ];
  const nav: Nav[] = [
    {
      ...pages[1],
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.63105 17.3093V14.7537C7.63104 14.1037 8.16097 13.5755 8.81755 13.5712H11.2226C11.8823 13.5712 12.4171 14.1006 12.4171 14.7537V14.7537V17.3173C12.417 17.8692 12.8619 18.3202 13.4192 18.3332H15.0226C16.621 18.3332 17.9167 17.0504 17.9167 15.468V15.468V8.19803C17.9082 7.57553 17.6129 6.99096 17.115 6.6107L11.6315 2.23759C10.6708 1.47614 9.30521 1.47614 8.34456 2.23759L2.88506 6.61863C2.38526 6.99736 2.08953 7.58289 2.08337 8.20597V15.468C2.08337 17.0504 3.3791 18.3332 4.97747 18.3332H6.58084C7.152 18.3332 7.61502 17.8748 7.61502 17.3093V17.3093"
            stroke="#6F61D0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      ...pages[2],
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1801 13.0169C13.1801 14.6777 12.0485 15.8511 10.2385 15.8511H5.05762C3.24929 15.8511 2.12512 14.6777 2.12512 13.0169V7.21691C2.12512 5.55691 3.24929 4.37524 5.06679 4.37524H10.2385C12.0485 4.37524 13.1801 5.55691 13.1801 7.21691V13.0169Z"
            stroke="#6F61D0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.1801 9.39709L16.5943 6.60209C17.1359 6.15625 17.9584 6.54375 17.9584 7.24959V12.9763C17.9584 13.6829 17.1359 14.0688 16.5943 13.6238L13.1801 10.8288"
            stroke="#6F61D0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    pages.forEach((value) => {
      if (location.pathname === value.link) {
        setPage(value.page);
      }
    });
  }, []);

  async function logout() {
    dispatch(fetchSignout());
  }

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__top}>
        <Link
          to="/profile"
          className={classNames({
            [s.sidebar__avatar]: true,
            [s.active__profile]: pages[0].link === location.pathname,
          })}
          onClick={() => setPage("Профиль")}
        >
          <div className={s.img}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt=""
            />
          </div>
        </Link>
        <div className={s.sidebar__divider}></div>
        <nav className={s.sidebar__nav}>
          {nav.map((item: Nav) => (
            <Link
              key={item.page + item.link}
              onClick={() => setPage(item.page)}
              to={item.link}
              className={item.link === location.pathname ? s.active__nav : ""}
            >
              <div className={s.sidebar__link}>
                {item.svg}
                <div className={s.sidebar__prompt}>
                  <p>{item.page}</p>
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </div>
      <div className={s.sidebar__bottom}>
        <div className={s.sidebar__divider}></div>
        <div className={s.sidebar__logout}>
          <div className={s.sidebar__link}>
            <a href="#" onClick={logout}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                  stroke="#6F61D0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3334 14.1663L17.5 9.99967L13.3334 5.83301"
                  stroke="#6F61D0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 10H7.5"
                  stroke="#6F61D0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
