/* eslint-disable react-hooks/exhaustive-deps */
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { useFetchContactsQuery } from 'api/fetch';
// import { addContacts } from 'redux/slice';
import { fetchContactsThunk } from 'redux/thunk';
// import { addContact } from 'redux/slice';

export function App () {
  // const { searchContact,} = useContext(Context)
  const {contacts, filter} = useSelector(state=> state.contactsBook)
  // const {data} = useFetchContactsQuery()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchContactsThunk())
    console.log(contacts)
  }, [dispatch])
  
  // const findContact = () =>{
  //   return contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(filter)
  // )}

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        {/* { findContact().length ?  */}
        <ContactList/>
        
        {/* : (<p>No matches found!</p>)}  */}
      </Container>
    );
}
