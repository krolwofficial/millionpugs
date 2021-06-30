import { StateI } from "../types";

const addToFav = ({ item }: StateI): void => {
  const saved = JSON.parse(localStorage.getItem("zapisane") || "[]");
  saved.push({ ...item });
  localStorage.setItem("zapisane", JSON.stringify(saved));
};

export default addToFav;
