import React, { Fragment } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import back from "../assets/buttons/back.png";
import { getPictures, BlobPicture } from "../db";
import { defaultPictures, UrlPicture } from "../assets";
import { Page } from "../components/page";
import { Aufdecken } from "../components/games/aufdecken";

type Params = {
  game: string;
  difficulty: string;
};

export type GamePictures = Array<BlobPicture | UrlPicture>;

type LoaderData = {
  pictures: GamePictures;
};

export async function loader(): Promise<LoaderData> {
  const userPictures = await getPictures();
  const pictures = [...userPictures, ...defaultPictures];

  return { pictures };
}

const Cell: React.FC<{ src: string; hidden?: boolean }> = ({
  src,
  hidden = false,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-2xl">
      <img
        className="absolute inset-0 object-cover object-center"
        src={src}
        alt=""
      />
    </div>
  );
};

export const Game: React.FC = () => {
  const { pictures: allPictures } = useLoaderData() as LoaderData;
  const { game, difficulty = "easy" } = useParams<Params>();

  let gameNode: React.ReactNode | null = null;
  switch (game) {
    case "aufdecken":
    default:
      gameNode = (
        <Aufdecken allPictures={allPictures} difficulty={difficulty} />
      );
  }

  return (
    <Page>
      {gameNode}

      <Link
        to={`/game/${game}`}
        className="absolute bottom-0 left-0 w-[8%] m-[1%]"
      >
        <img src={back} alt="Zurück" />
      </Link>
    </Page>
  );
};
