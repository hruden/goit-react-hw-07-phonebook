
export const handlePending = state => {
state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
export const handleFulfilledGet = (state, { payload }) => {
  handleFulfilled(state)
  state.contacts = payload;
};
export const handleFulfilledAdd = (state, { payload }) => {
  handleFulfilled(state)
  state.contacts.push(payload);
};
export const handleFulfilledDel = (state, { payload }) => {
  handleFulfilled(state)
  state.contacts = state.contacts.filter(
    el => el.id !== payload.id
  );
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};