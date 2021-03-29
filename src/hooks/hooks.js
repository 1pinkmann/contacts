import {useState, useEffect} from 'react';

import { editContact, getContacts, removeContact, createContact } from './../modules/Contacts/service/contactsService';

export function useContacts(defaultValue) {

    const [contacts, setContacts] = useState(defaultValue);

    const [show, setShow] = useState(false);

    const [editingContact, setEditingContact] = useState(null);

    let handleRemove = (id) => {
        removeContact(id);
        setContacts(contacts.filter((item) => item.id !== id))
    };

    let handleShow = () => {
        setShow(!show);
        if (show === false) {
            setEditingContact(null);
        }
    };

    let handleSaveContact = (contact) => {
        if (editingContact) {
            let id = contact.id;
            editContact(contact)
                .then((data) => {
                    setContacts(contacts.map(item => item.id !== id ? item : contact))
                    handleShow();
                })
        } else {
            createContact(contact)
                .then((res) => res.json())
                .then((data) => {
                    setContacts([...contacts, data]);
                    handleShow();
                })
        }
    }

    let handleEditContact = (editingContact) => {
        handleShow();
        setEditingContact(editingContact);
    }

    useEffect(() => {
        getContacts().then(list => {
            setContacts(list);
        });
    }, [])

    return {
        contacts,
        show,
        editingContact,
        setEditingContact,
        handleRemove,
        handleShow,
        handleSaveContact,
        handleEditContact
    }
}