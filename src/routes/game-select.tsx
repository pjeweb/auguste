import { Link, useParams } from "react-router-dom";
import React from "react";

import back from "../assets/buttons/back.png";
import aufdecken from "../assets/game-modes/001-aufdecken.png";
import merken from "../assets/game-modes/002-merken.png";
import raten from "../assets/game-modes/003-raten.png";
import suchen from "../assets/game-modes/004-suchen.png";
import verbinden from "../assets/game-modes/005-verbinden.png";
import erkennen from "../assets/game-modes/006-erkennen.png";
import zahlenVerbinden from "../assets/game-modes/007-zahlen-verbinden.png";
import booteZaehlen from "../assets/game-modes/008-boote-zaehlen.png";
import geldZaehlen from "../assets/game-modes/009-geld-zaehlen.png";

const GameMode: React.FC<{ imgSrc: string; label: string; link: string }> = ({
  imgSrc,
  link,
  label,
}) => {
  return (
    <Link
      to={link}
      className="flex-shrink-0 w-[20%] h-full flex flex-col items-stretch justify-between transition-transform hover:scale-110"
    >
      <img src={imgSrc} alt="" />
      <div className="bg-yellow-200 rounded-full p-[5%] uppercase font-bold text-gray-800 text-center">
        {label}
      </div>
    </Link>
  );
};

export const GameSelect: React.FC = () => {
  const { game } = useParams<{ game: string }>();
  if (!game) {
    return null;
  }

  return (
    <>
      <div className="bg-black/60 h-[66.6%] absolute left-0 right-0 top-[17%] overflow-x-auto overflow-y-hidden">
        <div className="flex flex-col w-[50%] mx-auto h-full justify-around py-[5%] text-3xl">
          <Link
            className="uppercase text-center p-[3%] rounded-full shadow-lg bg-blue-400"
            to={`/game/${game}/easy`}
          >
            Leicht
          </Link>
          <Link
            className="uppercase text-center p-[3%] rounded-full shadow-lg bg-yellow-400"
            to={`/game/${game}/medium`}
          >
            Mittel
          </Link>
          <Link
            className="uppercase text-center p-[3%] rounded-full shadow-lg bg-red-400"
            to={`/game/${game}/hard`}
          >
            Schwer
          </Link>
        </div>
      </div>

      <Link to="/play" className="absolute bottom-0 left-0 w-[8%] m-[1%]">
        <img src={back} alt="Zurück" />
      </Link>
    </>
  );
};
