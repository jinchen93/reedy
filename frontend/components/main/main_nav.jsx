import React from "react";
import MainNavWrapper from "./main_nav_wrapper";
import MainNavDropdownContainer from "./main_nav_dropdown_container.js";
import {
  StyledUserSection,
  StyledMainNavHeader,
  UserImg,
} from "../../styles/main";

const MainNav = ({ handleImgClick, articleModal, userDropdown }) => (
  <MainNavWrapper articleModal={articleModal}>

    <StyledMainNavHeader>
      New York Times
    </StyledMainNavHeader>

    <StyledUserSection>
      <UserImg src={window.guestImg} onClick={handleImgClick} />
      {userDropdown && <MainNavDropdownContainer />}
    </StyledUserSection>

  </MainNavWrapper>
);

export default MainNav;
