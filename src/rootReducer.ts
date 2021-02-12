import { combineReducers } from '@reduxjs/toolkit';

import navigationReducers from './services/navigation/navigation-slice';

const rootReducer = combineReducers({
  navigation: navigationReducers
});

export type InvoiceAppStore = ReturnType<typeof rootReducer>;

export default rootReducer;
