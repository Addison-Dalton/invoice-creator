import { createSelector } from '@reduxjs/toolkit';
import { InvoiceAppStore } from '../../rootReducer';

export const getNavigation = (state: InvoiceAppStore) => state.navigation;

export const selectLeftSidebarMobileOpen = createSelector(
  [getNavigation],
  (navigation) => ({
    mobileOpen: navigation.leftSidebarMobileOpen
  })
);
