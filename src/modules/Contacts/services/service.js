import api from "./api";

export function get() {
    return api.get();
}

export function remove(id) {
    return api.delete(id);
}

export function post(newContact) {
    return api.post('', newContact);
}

export function put(contact, id) {
    return api.put(id, contact);
}