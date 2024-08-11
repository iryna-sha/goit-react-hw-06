import { useDispatch } from 'react-redux';
import s from './Contact.module.css'
import { deleteContacts } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    return (
        <li className={s.item}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => dispatch(deleteContacts(id))}>Delete</button>
        </li>
    );
};

export default Contact;