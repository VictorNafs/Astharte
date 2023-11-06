/* eslint-disable */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './appheader.css'

import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilMenu } from '@coreui/icons';

import { AppHeaderDropdown } from './header/index';
import logo from 'src/assets/images/A.png';

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4 custom-header">
      <CContainer fluid className="d-flex justify-content-between align-items-center">

        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>

        <CHeaderBrand className="header-logo" to="/">
          <img src={logo} width="115" alt="Logo" />
        </CHeaderBrand>
        
        <div className="d-flex align-items-center">
          <CHeaderNav className="ms-3">
            <AppHeaderDropdown />
          </CHeaderNav>
        </div>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
