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
// import{ fetchContactsThunk, addContactThunk, deleteContactThunk } from "./thunk";


const { createSlice } = require('@reduxjs/toolkit');

// -------------------------Import-------------------

const initialState = {
  contacts: [],
    isLoading: false,
    error: null,
  filter: '',
};

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
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContactsThunk.fulfilled, handleFulfilledGet)
//       .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
//       .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
//       .addMatcher(isAnyOf(...changeThunkStatus('pending')), handlePending)
//       .addMatcher(
//         isAnyOf(...changeThunkStatus('rejected')),
//         handleRejected
//       );
//   },
// });
// export default contactsSlice.reducer;
// export const { filterContacts } = contactsSlice.actions;
// const arrayThunks = [fetchContactsThunk, addContactThunk, deleteContactThunk]
// const changeThunkStatus = type => {
//   arrayThunks.map(arr => arr[type]);
//   };
//    const handlePending = state => {
//   state.contacts.isLoading = true;
//   };
//   const handleFulfilled = state => {
//     state.contacts.isLoading = false;
//     state.contacts.error = '';
//   };
//    const handleFulfilledGet = (state, { payload }) => {
//     handleFulfilled(state)
//     state.contacts.items = payload;
//   };
//    const handleFulfilledAdd = (state, { payload }) => {
//     handleFulfilled(state)
//     state.contacts.items.push(payload);
//   };
//    const handleFulfilledDel = (state, { payload }) => {
//     handleFulfilled(state)
//     state.contacts.items = state.contacts.items.filter(
//       el => el.id !== payload.id
//     );
//   };
//    const handleRejected = (state, { payload }) => {
//     state.contacts.isLoading = false;
//     state.contacts.error = payload;
//   };

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
  },

});
export const { addContacts, removeContact, filterContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;

