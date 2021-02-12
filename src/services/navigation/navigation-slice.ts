import { createSlice } from '@reduxjs/toolkit';

type NavigationStore = {
  leftSidebarMobileOpen: boolean;
};

const initialState: NavigationStore = {
  leftSidebarMobileOpen: false
};

const navigationSlice = createSlice({
  name: 'handleLeftSidebar',
  initialState,
  reducers: {
    handleLeftSidebarToggle(state) {
      state.leftSidebarMobileOpen = !state.leftSidebarMobileOpen;
    }
  }
});

export const {
  handleLeftSidebarToggle
} = navigationSlice.actions;

export default navigationSlice.reducer;
