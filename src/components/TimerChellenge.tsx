import React, { FC, useState } from "react";

type TimerData = {
  title: string;
  targetTime: number;
};

const TimerChellenge: FC<TimerData> = ({ title, targetTime }) => {
  const [timeAbis, setTimeAbis] = useState<boolean>(false);
  const [timeKondisi, setTimeKondisi] = useState<boolean>(false);

  const fungsiSettimeout = () => {
    setTimeout(() => {
      setTimeAbis(true);
    }, targetTime * 1000);
    setTimeKondisi(true);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeAbis && <p>kamu kalah</p>}
      <p className="challenge-time ">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>

      <p>
        <button onClick={fungsiSettimeout}>
          {timeKondisi ? "Stop Challege" : "Start Challege"}
        </button>
      </p>

      <p className="">{timeKondisi ? " Time is Running" : ""}</p>
    </section>
  );
};

export default TimerChellenge;
