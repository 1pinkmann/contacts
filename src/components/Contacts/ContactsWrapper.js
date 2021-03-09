import React, {Component} from 'react';
import ContactsTable from './ContactsTable';
import ContactsButton from './ContactsButton';
import ContactsForm from './ContactsForm';
import './contacts.css';

import {getContacts, removeContact, createContact, editContact} from '../../services/contactsService';

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

        if (this.state.showForm === false) {
            this.setState({
                editingContact: null
            })
        }
    }

    handleSaveContact = (contact) => {
        if (this.state.editingContact) {
            let id = contact.id;
            editContact(contact)
                .then((data) => {
                    let editingArr = this.state.contacts.filter((item) => item.id !== id);
                    editingArr.push(data);
                    this.setState({contacts: editingArr});
                    this.handleShowForm();
                })
        } else {
            createContact(contact)
                .then((res) => res.json())
                .then((data) => {
                    this.setState({contacts: [...this.state.contacts, data]});
                    this.handleShowForm();
                })
        }

    }

    handleEditContact = (editingContact) => {
        this.setState({
            editingContact: editingContact
        })
    }

    render() {
        return (
            <div className="contacts">
                <ContactsTable contactsList={this.state.contacts} handleRemove={this.handleRemove}
                               handleEditContact={this.handleEditContact} handleShowForm={this.handleShowForm}/>
                <ContactsButton title="Добавить" handleClick={this.handleShowForm}/>

                {this.state.showForm ?
                    <ContactsForm handleSaveContact={this.handleSaveContact} handleShowForm={this.handleShowForm}
                                  user={this.state.editingContact}/> : null}
            </div>
        );
    }
}