import {React, useContext} from 'react';
import ContactsTable from './ContactsTable';
import ContactsButton from './ContactsButton';
import ContactsForm from './ContactsForm';
import './contacts.scss';

import { useContacts } from '../../../hooks/useContacts';
import {themeContext} from "../../../contexts/themeContext";
import Switcher from "../../Common/Switcher";

export default function Contacts () {

    const {
        contacts,
        handleRemove,
        handleShowForm,
        handleSaveContact,
        handleEditContact,
        editingContact,
        showForm
    } = useContacts([]);

    const {switchedValue} = useContext(themeContext);

    return (
        <div className={'contacts' + ' contacts--' + switchedValue}>
            <Switcher/>
            <ContactsTable contactsList={contacts} handleRemove={handleRemove}
                           handleEditContact={handleEditContact}/>
            <ContactsButton title="Добавить" handleClick={handleShowForm}/>

            {showForm ?
                <ContactsForm handleSaveContact={handleSaveContact} handleHideForm={handleShowForm}
                              contact={editingContact}/> : null}
        </div>
    );
}