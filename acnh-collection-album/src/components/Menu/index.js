import React from "react";
import { Logo } from "../Logo";
import { UserInformation } from "../UserInformation";
import { Nav, Title } from "./styles";
import { SearchBar } from "../SearchBar";

const DEFAULT_AVATAR_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/5/5b/Avatar_leaf.png";
const LOGO_IMAGE_URL =
  "https://www.pcworld.es/cmsdata/slideshow/3786537/animal-crossing_guia-compra_thumb1200_4-3.jpg";

export const Menu = (props) => {
  return (
    <Nav>
      <Logo source={LOGO_IMAGE_URL}></Logo>
      <Title>
        Animal Crossing<br></br>Collection Album
      </Title>
      <SearchBar placeholder="Search here..."></SearchBar>
      <UserInformation
        avatar={DEFAULT_AVATAR_IMAGE_URL}
        name="Guest"
      ></UserInformation>
    </Nav>
  );
};
