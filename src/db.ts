import { openDB, DBSchema } from "idb";

const SCHEMA_VERSION = 1;

export type BlobPicture = {
  id?: number;
  text: string;
  data: Blob;
};

interface PicturesDB extends DBSchema {
  pictures: {
    key: number;
    value: BlobPicture;
  };
}

const db = openDB<PicturesDB>("auguste.pictures", SCHEMA_VERSION, {
  upgrade(db, oldVersion, newVersion, transaction, event) {
    db.createObjectStore("pictures", {
      keyPath: "id",
      autoIncrement: true,
    });
  },
  //blocked(currentVersion, blockedVersion, event) {
  //  // …
  //},
  //blocking(currentVersion, blockedVersion, event) {
  //  // …
  //},
  //terminated() {
  //  // …
  //},
});

export async function getPictures() {
  return await (await db).getAll("pictures");
}

export async function addPicture(picture: BlobPicture) {
  await (await db).add("pictures", picture);
}

export async function deletePicture(key: number) {
  await (await db).delete("pictures", key);
}

export async function renamePicture(key: number, newText: string) {
  const oldValue = await (await db).get("pictures", key);
  if (oldValue) {
    const newValue = { ...oldValue, text: newText };
    await (await db).put("pictures", newValue, key);
  }
}
