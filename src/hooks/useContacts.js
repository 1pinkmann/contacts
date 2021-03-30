import {useState, useEffect, useCallback} from 'react';

import { put, get, remove, post } from '../modules/Contacts/services/todosService';

export function useContacts(defaultValue) {

    const [contacts, setContacts] = useState(defaultValue);

    const [show, setShow] = useState(false);

    const [editingContact, setEditingContact] = useState(null);

    let handleRemove = (id) => {
        remove(id).then(() => {
            setContacts(contacts.filter((item) => item.id !== id))
        });
    };

    let handleShow = useCallback(
        () => {
            setShow(!show);
            if (show === false) {
                setEditingContact(null);
            }
        }, [show]
    );

    let handleSaveContact = useCallback(
        (contact) => {
            if (editingContact) {
                let id = contact.id;
                put(contact, id)
                    .then(() => {
                        setContacts((contacts) => {
                            return contacts.map(item => item.id !== id ? item : contact);
                        })
                        handleShow();
                    })
            } else {
                post(contact)
                    .then(({data}) => {
                        setContacts((contacts) => {
                            return [...contacts, data]
                        });
                        handleShow();
                    })
            }
        },[editingContact, handleShow]);

    let handleEditContact = (editingContact) => {
        handleShow();
        setEditingContact(editingContact);
    }

    useEffect(() => {
        get().then(({data}) => {
            setContacts(data);
        });
    }, [])

    return {
        contacts,
        showForm: show,
        editingContact,
        setEditingContact,
        handleRemove,
        handleShowForm: handleShow,
        handleSaveContact,
        handleEditContact
    }
}