import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Hidden, Drawer } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { handleLeftSidebarToggle } from '../../services/navigation/navigation-slice';
import { selectLeftSidebarMobileOpen } from '../../services/navigation/navigation-selector';

import { SidebarContent } from './sidebar-content';

type Props = {
  width: number;
};

type StyleProps = {
  width: number;
};

const useStyles = makeStyles<Theme, StyleProps>((theme) =>
  createStyles({
    drawer: {
      flex: '0 0 auto',
      [theme.breakpoints.up('sm')]: {
        width: (p) => p.width
      }
    },
    drawerPaper: {
      width: (p) => p.width
    }
  }));

export const LeftSidebar: FunctionComponent<Props> = ({ width }) => {
  const dispatch = useDispatch();
  const { mobileOpen } = useSelector(selectLeftSidebarMobileOpen);
  const container = window !== undefined ? document.body : undefined;
  const classes = useStyles({ width });
  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
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
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{ paper: classes.drawerPaper }}
        >
          <SidebarContent />
        </Drawer>
      </Hidden>
    </nav>
  );
};
