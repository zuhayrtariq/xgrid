import React from "react";

const SecondsBand = ({ seconds }) => {
  return (
    <img
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[${
        seconds * 6
      }]`}
      src="/src/assets/seconds-band.png"
      alt=""
    />
  );
};

export default SecondsBand;
