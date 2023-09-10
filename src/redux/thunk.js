import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'api/fetch';

export const fetchContactsThunk = createAsyncThunk('contacts/get', () => {
  return fetchContacts();
});
export const addContactThunk = createAsyncThunk('contacts/add', (contact) => {
  return addContact(contact);
});
export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  (contactId) => {
    return deleteContact(contactId);
  }
);
