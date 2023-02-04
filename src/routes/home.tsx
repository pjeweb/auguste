import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import bg from "../assets/home/bg.jpg";
import mainButton from "../assets/home/main-button.png";
import galleryButton from "../assets/home/gallery-button.png";
import play from "../assets/home/play.png";

export const Home: React.FC = () => {
  return (
    <>
      <Link
        to="/play"
        className="block absolute hover:scale-110 transition-transform top-[30%] left-1/2 -translate-x-1/2 aspect-square w-[33%]"
      >
        <img src={mainButton} alt="" className="absolute inset-0" />
        <img
          src={play}
          alt="Spielen"
          className="absolute w-[84%] h-[84%] inset-0 ml-[7%] mt-[7%]"
        />
      </Link>
      <Link
        to="/gallery"
        className="block absolute hover:scale-110 transition-transform -top-[2%] left-[80%] -translate-x-1/2 aspect-square w-[20%]"
      >
        <img src={galleryButton} alt="Galerie" />
      </Link>
      <Link
        to="/help"
        className="
        absolute bottom-[2%] right-[10%] hover:scale-110 transition-transform
        bg-yellow-300 text-gray-800 block aspect-square w-[6%] rounded-full text-3xl font-bold flex justify-center items-center"
      >
        ?<span className="sr-only">Hilfe</span>
      </Link>
    </>
  );
};
