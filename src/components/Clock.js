import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString('it-IT'));
    }, 1000);
  }, []);

  return <div>{clockState}</div>;
}

export default Clock;