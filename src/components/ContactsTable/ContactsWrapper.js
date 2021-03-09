import React, { Component } from 'react';
import ContactsTable from './ContactsTable';
import ContactsButton from './ContactsButton';
import ContactsForm from './ContactsForm';
import './contacts.css';

import {getContacts, removeContact, createContact} from '../../services/contactsService';

export default class ContactsWrapper extends Component {

    state = {
        contacts: [],
        showForm: false
    }

    componentDidMount() {
        getContacts().then(list => {
            this.setState({contacts: list})
        });
    }

    handleRemove = (id) => {
        removeContact(id);

        this.setState({contacts: this.state.contacts.filter((item) => item.id !== id)});
    }

    handleShowForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    handleCreateContact = (newContact) => {
        createContact(newContact)
            .then((res) => res.json())
            .then((data) => {
                this.setState({contacts: [...this.state.contacts, data]});
                this.handleShowForm();
            })
    }

    handleEditContact = (contact) => {
        return <ContactsForm handleCreateContact = {this.handleCreateContact} handleShowForm = {this.handleShowForm} user = {contact} />
    }

    render() {
        return(
            <div className="contacts">
                <ContactsTable contactsList = {this.state.contacts} handleRemove = {this.handleRemove} handleEditContact = {this.handleEditContact} handleShowForm = {this.handleShowForm}/>   
                <ContactsButton title="Добавить" handleClick = {this.handleShowForm}/>   

                {this.state.showForm ? this.handleEditContact() : null}
            </div>
        );
    }
}