import React from 'react';
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const NavBar = () => {
  return (
    <>
      <CNavbar expand="xxl" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Guilherme Batista</CNavbarBrand>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default NavBar;
