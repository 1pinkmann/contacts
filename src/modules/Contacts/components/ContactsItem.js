import React from 'react';


export default function ContactsItem ({contact, handleRemove, handleEditContact}) {

    let handleRemoveClick = (e) => {
        e.stopPropagation();
        handleRemove(contact.id);
    }

    let handleEditClick = (e) => {
        e.stopPropagation();
        handleEditContact(contact);
    }

    return(
        <tr>
            <td>{contact.name}</td>
            <td>{contact.surname}</td>
            <td>{contact.phone}</td>
            <td>
                <button className="contacts__delete" onClick={handleRemoveClick}></button>
                <button className="contacts__edit" onClick={handleEditClick}></button>
            </td>
        </tr>
    );
}