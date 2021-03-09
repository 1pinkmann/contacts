import {URL} from './constants';

export function getContacts() {
    return fetch(URL).then(res => res.json());
}

export function removeContact(id) {
    return fetch(URL + id , {
        method: 'DELETE'
    }).then(res => res.json());
}

export function createContact(newContact) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export function editContact(contact) {
    let id = contact.id;
    return fetch(URL + id, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res) => res.json())
}