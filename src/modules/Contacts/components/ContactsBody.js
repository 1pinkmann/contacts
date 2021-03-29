import React from 'react';
import ContactsItem from './ContactsItem';

export default function ContactsBody ({contactsList, handleRemove, handleEditContact}) {

    return (
        <tbody>
            {contactsList.map(item => {
                return <ContactsItem key = {item.id} contact = {item} handleRemove = {handleRemove} handleEditContact = {handleEditContact} />
            })}
        </tbody>
    );
}