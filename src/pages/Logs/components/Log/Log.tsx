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
    <div className={s.log}>
      <div className={s.info}>
        <div className={s.date}>
          <p>{log.date}</p>
        </div>
        <div className={s.time}>
          <p>{log.time}</p>
        </div>
      </div>
      <div className={s.user}>
        <p>{log.user}</p>
      </div>
      <div className={s.action}>
        <p>{log.action}</p>
      </div>
    </div>
  );
};
