import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contactsBook.contacts;
export const selectFilter = state => state.contactsBook.filter;
export const selectIsLoading = state => state.contactsBook.isLoading;
export const selectError = state => state.contactsBook.error;

export const getVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
     return contacts.filter(({name})=> name.toLowerCase()
            .includes(filter.toLowerCase()))
    }
  )
