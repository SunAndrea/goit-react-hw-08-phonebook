import { createSlice } from '@reduxjs/toolkit';

import { addContact, fetchContacts, deleteContact } from './operations';

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: onPending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: onRejected,

    [addContact.pending]: onPending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: onRejected,
    [deleteContact.pending]: onPending,
    [deleteContact.fulfilled](state, action) {
      console.log(action);
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => {
        return contact.id !== action.payload.id;
      });
    },
    [deleteContact.rejected]: onRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
