import React from "react";
import styled from "styled-components";
import device from "../../utils/device";
import { Store } from "../../store/context";
import ImageLoader from "react-load-image";
import { ContextI } from "../../types";

const ImageLoaderLoad = () => {
  return <p style={{ color: "DeepPink" }}>Awensome Image loader</p>;
};

const Item = (): JSX.Element => {
  const {
    state: {
      item: { url, title, date, explanation },
    },
  } = React.useContext<ContextI>(Store);

  return (
    <ItemWrapper>
      <ImageLoader src={url}>
        <ImgS src={url} alt={title} />
        <div>Error with image</div>
        <ImageLoaderLoad />
      </ImageLoader>
      <ItemDesc>
        <ItemDescTitle>{title}</ItemDescTitle>
        <ItemDescText>{date}</ItemDescText>
        <ItemDescText>{explanation.substring(0, 200)} ...</ItemDescText>
      </ItemDesc>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 320px;
  min-width: 320px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const ItemDesc = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;

  @media ${device.laptop} {
    width: 500px;
  }
`;

const ImgS = styled.img`
  display: block;
  max-width: 320px;
  max-height: 320px;
  width: auto;
  height: auto;
  margin: 5px 0 20px;
`;

const ItemDescTitle = styled.p`
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const ItemDescText = styled.p`
  margin-bottom: 10px;
`;

export default Item;
