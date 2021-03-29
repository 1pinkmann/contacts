import React from 'react';
import ContactsHead from './ContactsHead';
import ContactsBody from './ContactsBody';

export default function ContactsTable ({contactsList, handleRemove, handleEditContact}) {

    return(
        <table className="contacts__table">
            <ContactsHead />
            <ContactsBody contactsList = {contactsList} handleRemove = {handleRemove} handleEditContact = {handleEditContact} />
        </table>
    );
}