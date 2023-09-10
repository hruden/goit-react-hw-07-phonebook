// -------------------------Import-------------------
// import STATUS from './constans';
// import {
//   changeThunkStatus,
//   handleFulfilledAdd,
//   handleFulfilledDel,
//   handleFulfilledGet,
//   handlePending,
//   handleRejected,
// } from './service/fnSlice';
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
const arrayThunks = [fetchContactsThunk, addContactThunk, deleteContactThunk];
const changeThunkStatus = type => {
  arrayThunks.map(arr => arr[type]);
};
const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
const handleFulfilledGet = (state, { payload }) => {
  handleFulfilled(state);
  state.contacts = payload;
};
const handleFulfilledAdd = (state, { payload }) => {
  handleFulfilled(state);
  state.contacts.push(payload);
};
const handleFulfilledDel = (state, { payload }) => {
  handleFulfilled(state);
  state.contacts = state.contacts.items.filter(el => el.id !== payload.id);
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contactsBook',
  initialState,
  reducers: {
    addContacts: (state, action) => {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    removeContact: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    filterContacts: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
    extraReducers: builder => {
      builder
        .addCase(fetchContactsThunk.fulfilled, handleFulfilledGet)
        .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
        .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
        .addMatcher(isAnyOf(...changeThunkStatus('pending')), handlePending)
        .addMatcher(isAnyOf(...changeThunkStatus('rejected')), handleRejected);
    },
  },
});
export const { addContact, removeContact, filterContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;

// export const contactsSlice = createSlice({
//   name: 'contactsBook',
//   initialState,
//   reducers: {
//     filterContacts: (state, action) => {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     },
//   },
// extraReducers: builder => {
//   builder
//     .addCase(fetchContactsThunk.fulfilled, handleFulfilledGet)
//     .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
//     .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
//     .addMatcher(isAnyOf(...changeThunkStatus('pending')), handlePending)
//     .addMatcher(
//       isAnyOf(...changeThunkStatus('rejected')),
//       handleRejected
//     );
// },
// });
// export default contactsSlice.reducer;
// export const { filterContacts } = contactsSlice.actions;
