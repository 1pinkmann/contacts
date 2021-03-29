import {React} from 'react';
import ContactsTable from './ContactsTable';
import ContactsButton from './ContactsButton';
import ContactsForm from './ContactsForm';
import './contacts.css';

import { useContacts } from '../../../hooks/hooks';

export default function Contacts () {

    const {
        contacts,
        handleRemove,
        handleShow: handleShowForm,
        handleSaveContact,
        handleEditContact,
        editingContact,
        show: showForm
    } = useContacts([]);

    return (
        <div className="contacts">
            <ContactsTable contactsList={contacts} handleRemove={handleRemove}
                           handleEditContact={handleEditContact}/>
            <ContactsButton title="Добавить" handleClick={handleShowForm}/>

            {showForm ?
                <ContactsForm handleSaveContact={handleSaveContact} handleHideForm={handleShowForm}
                              contact={editingContact}/> : null}
        </div>
    );
}