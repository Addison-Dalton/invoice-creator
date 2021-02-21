import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Hidden, Drawer } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

import { handleLeftSidebarToggle } from '../../services/navigation/navigation-slice';
import { selectLeftSidebarMobileOpen } from '../../services/navigation/navigation-selector';

import { SidebarContent } from './sidebar-content';

const SIDEBAR_WIDTH = 240;

const $Wrapper = styled.nav(({ theme }: { theme: Theme }) => `
  flex: 0 0 auto;
  ${theme.breakpoints.up('sm')} {
    width: ${SIDEBAR_WIDTH}px;
  }
`);

const $Drawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: ${SIDEBAR_WIDTH}px;
  }
`;

export const LeftSidebar = () => {
  const dispatch = useDispatch();
  const { mobileOpen } = useSelector(selectLeftSidebarMobileOpen);
  const container = window !== undefined ? document.body : undefined;

  return (
    <$Wrapper>
      <Hidden smUp implementation="css">
        <$Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => dispatch(handleLeftSidebarToggle())}
          ModalProps={{
            keepMounted: true
          }}
        >
          <SidebarContent />
        </$Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <$Drawer
          variant="permanent"
          open
        >
          <SidebarContent />
        </$Drawer>
      </Hidden>
    </$Wrapper>
  );
};
