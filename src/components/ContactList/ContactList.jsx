import { useDeleteContactMutation, useFetchContactsQuery } from "api/fetch";
import { ContactsBook, ContactsItem, DeleteContact } from "./ContactList.styled"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { removeContact } from "redux/slice";


export const ContactList = () => {
    const dispatch = useDispatch()
    const {data:list, error, isFetching, isSuccess, isError} = useFetchContactsQuery()
    const [deleteProduct, isLoading] = useDeleteContactMutation()
    const removeContact = (id)=>{
        dispatch(removeContact(id))
        deleteProduct(id)

    }

if(isFetching){
    return <div>...loading</div>
}
if(isSuccess){
    return (
        <ContactsBook>
            {list.map(({id, name, number}) => 
                <ContactsItem key={id}>{name}: {number}
                    <DeleteContact onClick={(removeContact(id))} disabled={isLoading}>Delete</DeleteContact>
                </ContactsItem>            
            )}
        </ContactsBook>
    )
}
if(isError){
    return(<div>{error.message}</div>)
}
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
