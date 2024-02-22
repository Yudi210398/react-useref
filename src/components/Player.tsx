import { useRef, useState } from "react";

type isiDataState = string;

export default function Player() {
  const [datas, setdatas] = useState<isiDataState>("");

  const data = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (data.current) setdatas(data.current?.value);
  };

  return (
    <section id="player">
      <h2>{datas} </h2>
      <p>
        <input ref={data} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
