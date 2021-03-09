import React, { Component } from 'react';
import ContactsHead from './ContactsHead';
import ContactsBody from './ContactsBody';

export default class ContactsTable extends Component {

    render() {
        return(
            <table className="contacts__table">
                <ContactsHead />
                <ContactsBody contactsList = {this.props.contactsList} handleRemove = {this.props.handleRemove} handleEditContact = {this.props.handleEditContact} />
            </table>
        );
    }
}