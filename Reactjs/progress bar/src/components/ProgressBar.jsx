import { useEffect, useState } from "react";

const MAX = 100;
const MIN = 0;

const ProgressBar = ({ TotalTime = 10000 }) => {
  const [value, setValue] = useState(MIN);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setValue(value + 1);
    }, [TotalTime / 100]);
    if (value >= MAX) clearTimeout(timeout);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return (
    <div
      style={{
        width: "400px",
        height: "40px",
        backgroundColor: "grey",
        border: "1px solid black",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: value > 50 ? "black" : "white",
        }}
      >
        {value} %
      </span>
      <div
        style={{
          width: `${value * 4}px`,
          height: "40px",
          backgroundColor: "aqua",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
