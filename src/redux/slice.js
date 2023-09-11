// -------------------------Import-------------------
// import STATUS from './constans';
import { handleFulfilledAdd, handleFulfilledDel, handleFulfilledGet, handlePending, handleRejected } from './servise/fnSlice';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './thunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

// -------------------------Import-------------------

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = '';
// };
// const handleFulfilledGet = (state, { payload }) => {
//   handleFulfilled(state);
//   state.contacts = payload;
// };
// const handleFulfilledAdd = (state, { payload }) => {
//   handleFulfilled(state);
//   state.contacts.push(payload);
// };
// const handleFulfilledDel = (state, { payload }) => {
//   handleFulfilled(state);
//   state.contacts = state.contacts.filter(el => el.id !== payload.id);
// };
// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

const contactsSlice = createSlice({
  name: 'contactsBook',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
      .addMatcher(isAnyOf(fetchContactsThunk.pending, addContactThunk.pending, deleteContactThunk.pending), handlePending)
      .addMatcher(isAnyOf(fetchContactsThunk.rejected, addContactThunk.rejected, deleteContactThunk.rejected), handleRejected);
  },
});
export const { filterContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;

