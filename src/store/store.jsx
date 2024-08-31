import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contactsSlice';
import filterReducer from '../redux/filter/filterSlice';
import authReducer from '../redux/auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
