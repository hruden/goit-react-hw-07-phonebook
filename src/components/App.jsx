/* eslint-disable react-hooks/exhaustive-deps */
import Alert from 'react-bootstrap/Alert';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, NotFoundAlert } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/thunk';
import { getVisibleContacts, selectError } from 'redux/selectors';


export function App () {  
  const error = useSelector(selectError)
  const contactsList = useSelector(getVisibleContacts)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchContactsThunk())
  }, [dispatch])
  
  // const findContact = () =>{
  //   return contacts.filter((contact) => contact?.name.toLocaleLowerCase().includes(filter)
  // )}

  if(error){
    return (<Alert variant='danger'>
    This is a error alert— something wrong!
  </Alert>)
  }

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        { contactsList.length ? <ContactList />
        : (<NotFoundAlert variant='dark'>No matches found!</NotFoundAlert>)} 
      </Container>
    );

}

