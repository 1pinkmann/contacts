import React, { Component } from 'react';
import ContactsItem from './ContactsItem';

export default class ContactsBody extends Component {

    render() {
        return (
            <tbody>
                {this.props.contactsList.map(item => {
                    return <ContactsItem key = {item.id} contact = {item} handleRemove = {this.props.handleRemove} handleEditContact = {this.props.handleEditContact} />
                })}
            </tbody>
        );
    }
}