import React from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "./Card.css";

function WorldClock({ timezone }) {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <Clock value={time} timezone={timezone} />;
}

export default WorldClock;
