import { useEffect, useState } from "react";
import "./App.css";
import SecondsBand from "./SecondsBand";

function App() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    console.log(seconds);
    setTimeout(() => {
      setSeconds(new Date().getSeconds());
      setMinutes(new Date().getMinutes());
      setHours(new Date().getHours());
    }, 1000);
    // setSeconds(new Date().getSeconds());
  }, [seconds]);

  return (
    <>
      <div className="bg-red-100 w-full h-screen flex items-center justify-center">
        <div className="w-[340px] h-[340px]  relative">
          <img
            className="absolute top-0 left-0 scale-125"
            src="/src/assets/bg-clock.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 "
            src="/src/assets/seconds-bg.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0"
            src="/src/assets/minutes-bg.png"
            alt=""
          />

          <img
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[${
              40 * hours
            }]`}
            src="/src/assets/minutes-band.png"
            alt=""
          />
          <img
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[${
              6 * minutes
            }]`}
            src="/src/assets/minutes-band.png"
            alt=""
          />

          {/* <img
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[${
              seconds * 6
            }]`}
            src="/src/assets/seconds-band.png"
            alt=""
          /> */}
          <SecondsBand seconds={seconds} />
        </div>
      </div>
    </>
  );
}

export default App;
