import{ fetchContactsThunk, addContactThunk, deleteContactThunk } from "./thunk";

const arrayThunks = [fetchContactsThunk, addContactThunk, deleteContactThunk];

export const changeThunkStatus = type => {
arrayThunks.map(arr => arr[type]);
};
export const handlePending = state => {
state.contacts.isLoading = true;
};
const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = '';
};
export const handleFulfilledGet = (state, { payload }) => {
  handleFulfilled(state)
  state.contacts.items = payload;
};
export const handleFulfilledAdd = (state, { payload }) => {
  handleFulfilled(state)
  state.contacts.items.push(payload);
};
export const handleFulfilledDel = (state, { payload }) => {
  handleFulfilled(state)
  state.contacts.items = state.contacts.items.filter(
    el => el.id !== payload.id
  );
};
export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};