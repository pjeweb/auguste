import { Link } from "react-router-dom";
import React from "react";

import back from "../assets/buttons/back.png";

export const Help: React.FC = () => {
  return (
    <>
      <div className="bg-black/60 h-[66.6%] absolute left-0 right-0 top-[17%] overflow-x-auto overflow-y-hidden">
        Hilfe hier
      </div>

      <Link to="/" className="absolute bottom-0 left-0 w-[8%] m-[1%]">
        <img src={back} alt="Zurück" />
      </Link>
    </>
  );
};
