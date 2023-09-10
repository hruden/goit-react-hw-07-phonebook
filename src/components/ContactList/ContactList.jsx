// import { useDeleteContactMutation, useFetchContactsQuery } from "api/fetch";
import { ContactsBook, ContactsItem, DeleteContact, DeleteSpinner } from "./ContactList.styled"
import PropTypes from 'prop-types';
import { useDispatch, useSelector} from "react-redux";
// import { removeContact } from "redux/slice";
import { deleteContactThunk } from "redux/thunk";


export const ContactList = ({list}) => {
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state=> state.contactsBook)
// if(isFetching){
//     return <div>...loading</div>
// }

    return (
        <ContactsBook>
            {list.map(({id, name, phone}) => 
                <ContactsItem key={id}>{name}: {phone}
                    {isLoading? <DeleteSpinner animation="border" variant="danger"/>:<DeleteContact onClick={()=>dispatch(deleteContactThunk(id))}>Delete</DeleteContact>}
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
