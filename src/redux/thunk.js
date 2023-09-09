import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts } from 'api/fetch';
import { addContact } from './slice';

export const fetchContactsThunk = createAsyncThunk('contacts/get', () => {
  try {
    return fetchContacts();
  } catch (error) {
    return error;
  }
});
export const addContactThunk = createAsyncThunk('contacts/add', contact => {
  try {
    return addContact(contact);
  } catch (error) {
    return error;
  }
});
export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  contactId => {
    try {
      return deleteContact(contactId);
    } catch (error) {
      return error;
    }
  }
);
