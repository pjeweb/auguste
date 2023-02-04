import React from "react";
import { GamePictures } from "../../routes/game";

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

export const Aufdecken: React.FC<{
  allPictures: GamePictures;
  difficulty: string;
}> = ({ allPictures, difficulty }) => {
  let gridSize: [number, number];
  let gridClasses: string;

  switch (difficulty) {
    case "hard":
      gridSize = [5, 4];
      gridClasses = "grid-cols-5 grid-rows-4";
      break;
    case "medium":
      gridSize = [4, 3];
      gridClasses = "grid-cols-4 grid-rows-3";
      break;
    case "easy":
    default:
      gridSize = [3, 2];
      gridClasses = "grid-cols-3 grid-rows-2";
  }

  const [x, y] = gridSize;

  const total = x * y;
  const numberOfPictures = total / 2;

  const selectedPictures = allPictures
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfPictures);

  const pictures = [...selectedPictures, ...selectedPictures].sort(
    () => 0.5 - Math.random()
  );

  return (
    <div
      className={`absolute inset-[5%] bottom-[20%] gap-[5%] grid ${gridClasses}`}
    >
      {pictures.map((pic, key) => {
        const src = "data" in pic ? URL.createObjectURL(pic.data) : pic.url;

        return <Cell key={key} src={src} />;
      })}
    </div>
  );
};
