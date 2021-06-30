import React from "react";
import styled from "styled-components";
import { ItemI } from "../../types";

const Favourites = (): JSX.Element => {
  const [saved, setSaved] = React.useState<ItemI[]>([]);

  React.useEffect(() => {
    setSaved(JSON.parse(localStorage.getItem("zapisane") || "{}"));
  }, []);

  return (
    <FavouritesWrapper>
      {saved.length &&
        saved.map((item: ItemI) => (
          // I can use 'title' as a key, because by 'pointer-events none' I prevent the same image to be added to /zapisane
          <ImgS key={item.title} src={item.url} alt={item.title} />
        ))}
    </FavouritesWrapper>
  );
};

const FavouritesWrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ImgS = styled.img`
  display: block;
  max-width: 320px;
  max-height: 320px;
  width: auto;
  height: auto;
  margin: 10px;
`;

export default Favourites;
