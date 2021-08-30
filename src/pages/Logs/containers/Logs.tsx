import { map } from "lodash";
import React from "react";

import { ILog } from "../components/Log/Log";

import { Log } from "../components/Log/Log";

import s from "./Logs.module.scss";

export const Logs = () => {
  const logs: ILog[] = [
    {
      date: "26.07.2021",
      time: "16:54",
      user: "Иванов Иван Иванович",
      action: "купил тариф стандарт",
    },
    {
      date: "26.07.2021",
      time: "16:54",
      user: "Иванов Иван Иванович",
      action: "купил тариф стандарт",
    },
    {
      date: "26.07.2021",
      time: "16:54",
      user: "Иванов Иван Иванович",
      action: "купил тариф стандарт",
    },
    {
      date: "26.07.2021",
      time: "16:54",
      user: "Иванов Иван Иванович",
      action: "купил тариф стандарт",
    },
    {
      date: "26.07.2021",
      time: "16:54",
      user: "Иванов Иван Иванович",
      action: "купил тариф стандарт",
    },
    {
      date: "26.07.2021",
      time: "16:54",
      user: "Иванов Иван Иванович",
      action: "обосрался",
    },
    {
      date: "26.07.2021",
      time: "16:54",
      user: "Иванов Иван Иванович",
      action: "жидко обосрался",
    },
    {
      date: "26.07.2021",
      time: "16:54",
      user: "Иванов Иван Иванович",
      action:
        "сделал чето такое что логи стали большими и хуй знает как себя ведут",
    },
  ];

  const data = new Date();

  console.log(data + " " + typeof data);

  return (
    <div className={s.logs}>
      <div className={s.container}>
        {logs.map((log) => (
          <Log log={log} />
        ))}
        <div className={s.divider}></div>
        {logs.map((log) => (
          <Log log={log} />
        ))}
      </div>
    </div>
  );
};
