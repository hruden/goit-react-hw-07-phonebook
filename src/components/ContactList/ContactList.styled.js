import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

export const  ContactsBook = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 5px;
    width: 400px;
`
export const ContactsItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    &::before{
        content: '';
        width: 3px;
        height: 3px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: black;
        margin-right: 5px;
    }
`
export const DeleteContact = styled.button`
    margin-left: auto;
    &:hover{
        border-color: #DC143C;
        background-color: #DC143C;
        color: white;
    }
`
export const DeleteSpinner = styled(Spinner)`
    margin-left: auto;
`