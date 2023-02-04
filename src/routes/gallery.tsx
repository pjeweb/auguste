import { Link, useLoaderData, useRevalidator } from "react-router-dom";
import React, { useState } from "react";

import back from "../assets/buttons/back.png";
import { addPicture, BlobPicture, getPictures } from "../db";

type LoaderData = {
  pictures: Array<BlobPicture>;
};
const MAX_TRIES = 5;

export async function loader(): Promise<LoaderData> {
  const pictures = await getPictures();

  return { pictures };
}

export const Gallery: React.FC = () => {
  const { revalidate } = useRevalidator();
  const { pictures } = useLoaderData() as LoaderData;
  const [error, setError] = useState<string | undefined>();

  const startUpload = async () => {
    const [fileHandle] = await window.showOpenFilePicker({
      multiple: true,
      excludeAcceptAllOption: true,
      types: [
        {
          description: "Fotos",
          accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg", ".webp", ".heic"],
          },
        },
      ],
    });
    const file = await fileHandle.getFile();
    const image = await createImageBitmap(file);
    console.log({ image, file });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;

      let { width, height } = image;
      if (width > height) {
        if (width > MAX_WIDTH) {
          height = height * (MAX_WIDTH / width);
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width = width * (MAX_HEIGHT / height);
          height = MAX_HEIGHT;
        }
      }

      ctx.drawImage(image, 0, 0, width, height);
      canvas.toBlob((data) => {
        if (!data) {
          setError("Foto konnte nicht hochgeladen werden");
          return;
        }

        let text: string | null = null;
        for (let i = 0; i < MAX_TRIES; i++) {
          text = prompt("Beschriftung");
          if (text) break;
        }
        text = text || "Neues Bild";

        addPicture({ text, data });
        revalidate();
      });
    }
  };

  return (
    <>
      <div className="bg-black/60 h-[66.6%] absolute left-0 right-0 top-[17%] overflow-x-auto overflow-y-hidden">
        {pictures.map((pic, key) => (
          <img key={key} src={URL.createObjectURL(pic.data)} alt="" />
        ))}
      </div>

      <Link to="/" className="absolute bottom-0 left-0 w-[8%] m-[1%]">
        <img src={back} alt="Zurück" />
      </Link>

      <button
        type="button"
        onClick={startUpload}
        className="absolute bg-yellow-300 py-[1%] px-[2%] shadow-2xl whitespace-nowrap rounded-full bottom-0 right-0 text-2xl m-[1%]"
      >
        + Neues Bild
      </button>
    </>
  );
};
