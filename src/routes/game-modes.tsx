import { Link } from "react-router-dom";
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

export const GameModes: React.FC = () => {
  return (
    <>
      <div className="bg-black/60 h-[66.6%] absolute left-0 right-0 top-[17%] overflow-x-auto overflow-y-hidden no-scrollbar">
        <div className="flex flex-row h-full gap-[5%] py-[5%]">
          <div className="flex-shrink-0 w-[10%]"></div>
          <GameMode
            imgSrc={aufdecken}
            label="Aufdecken"
            link="/game/aufdecken"
          />
          <GameMode imgSrc={merken} label="Merken" link="/game/merken" />
          <GameMode imgSrc={raten} label="Raten" link="/game/raten" />
          <GameMode imgSrc={suchen} label="Suchen" link="/game/suchen" />
          <GameMode
            imgSrc={verbinden}
            label="Verbinden"
            link="/game/verbinden"
          />
          <GameMode imgSrc={erkennen} label="Erkennen" link="/game/erkennen" />
          <GameMode
            imgSrc={zahlenVerbinden}
            label="Zahlen Verbinden"
            link="/game/zahlen-verbinden"
          />
          <GameMode
            imgSrc={booteZaehlen}
            label="Boote Zählen"
            link="/game/boote-zaehlen"
          />
          <GameMode
            imgSrc={geldZaehlen}
            label="Geld Zählen"
            link="/game/geld-zaehlen"
          />
          <div className="flex-shrink-0 w-[10%]"></div>
        </div>
      </div>

      <Link to="/" className="absolute bottom-0 left-0 w-[8%] m-[1%]">
        <img src={back} alt="Zurück" />
      </Link>
    </>
  );
};
