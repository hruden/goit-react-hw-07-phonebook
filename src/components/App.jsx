/* eslint-disable react-hooks/exhaustive-deps */
import Alert from 'react-bootstrap/Alert';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/thunk';

export function App () {
  const {contacts,filter, error} = useSelector(state=> state.contactsBook)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchContactsThunk())
  }, [dispatch])
  
  const findContact = () =>{
    return contacts.filter((contact) => contact?.name.toLocaleLowerCase().includes(filter)
  )}

  if(error){
    return (<Alert variant={'danger'}>
    This is a error alert— something wrong!
  </Alert>)
  }

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        { findContact().length ? (<ContactList list={findContact()}/>
        ): (<p>No matches found!</p>)} 
      </Container>
    );

}

