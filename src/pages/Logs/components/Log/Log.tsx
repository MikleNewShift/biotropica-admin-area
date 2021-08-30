import React from "react";

import s from "./Log.module.scss";

export interface ILog {
  date: string;
  time: string;
  user: string;
  action: string;
}

interface Props {
  log: ILog;
}

export const Log = ({ log }: Props) => {
  return (
    <p className={s.log}>
      <span className={s.date}>{log.date}</span>
      <span className={s.time}>{log.time}</span>
      <span className={s.user}>{log.user}</span>
      <span className={s.action}>{log.action}</span>
    </p>
  );
};
