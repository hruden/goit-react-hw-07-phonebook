// import { useDeleteContactMutation, useFetchContactsQuery } from "api/fetch";
import { ContactsBook, ContactsItem, DeleteContact } from "./ContactList.styled"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/slice";


export const ContactList = () => {
    const dispatch = useDispatch()
    const {contacts} = useSelector(state=> state.contactsBook)
    // const {data:list, error, isFetching, isSuccess, isError} = useFetchContactsQuery()
    // const [deleteProduct, isLoading] = useDeleteContactMutation()
    const removeContacts = (id)=>{
        dispatch(removeContact(id))
        // deleteProduct(id)

    }

// if(isFetching){
//     return <div>...loading</div>
// }

    return (
        <ContactsBook>
            {contacts.map(({id, name, phone}) => 
                <ContactsItem key={id}>{name}: {phone}
                    <DeleteContact onClick={(removeContacts(id))}>Delete</DeleteContact>
                </ContactsItem>            
            )}
        </ContactsBook>
    )

// if(isError){
//     return(<div>{error.message}</div>)
// }
}
    

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    removeContact: PropTypes.func
}
