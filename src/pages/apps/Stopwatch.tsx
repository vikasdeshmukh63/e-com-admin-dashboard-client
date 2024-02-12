import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboardAppContainer">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={resetHandler}>reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
