import React from "react";
import Posts from "../Posts";
import { Image } from "../App";
import styled, { createGlobalStyle, css } from "styled-components";
import { PostGrid, InfoGrid } from "./PostGrid";
import { MiniUserGrid } from "../profile/UserGrid";
import { ProfileImage } from "../profile/ProfileImage";

const OverFlowHidden = createGlobalStyle`
body{
  overflow:hidden;
}
`;

const ModalStyled = styled.div`
position: absolute;
background: #fff;
top: ${({ top }) => top}px;
left: 25%;
right: 25%;
width: 600px; 
border: 2px solid #444;

@media(max-width: 990px){
  left: 0;
  right: 0;
  top: ${({ top }) => top}px;
  width: auto;
}
`;

export function Modal({ match, history }) {
  let image = Posts[parseInt(match.params.id, 10) - 1];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: window.scrollY + window.innerHeight + "px",
        // to dimm the screen
        background: "rgba(0, 0, 0, 0.8)"
      }}
    >
      <ModalStyled top={window.scrollY + window.innerHeight / 2 - 250}>
        <OverFlowHidden />
        <PostGrid>
          <Image inModal index={image.id} />{" "}
          <InfoGrid>
            <MiniUserGrid mini>
              <ProfileImage mini/>
              <h2> GridGallery </h2>{" "}
            </MiniUserGrid>{" "}
            <h1> {image.title} </h1> <div> 45 Likes </div>{" "}
          </InfoGrid>{" "}
          {/* Applying global style when this component is activated.  */}
        </PostGrid>{" "}
      </ModalStyled>{" "}
    </div>
  );
}
