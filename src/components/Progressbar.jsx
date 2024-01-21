import { useState, useEffect } from "react";

const ProgressBar = ({ time }) => {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);
  return <progress max={time} value={remainingTime} />;
};

export default ProgressBar;
