import React, { Component } from 'react';


export default class ContactsItem extends Component {

    handleRemoveClick = (e) => {
        e.stopPropagation();
        this.props.handleRemove(this.props.contact.id);
    }

    handleEditClick = (e) => {
        e.stopPropagation();
        this.props.handleEditContact(this.props.contact);
    }

    render() {
        return(
            <tr>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.surname}</td>
                <td>{this.props.contact.phone}</td>
                <td>
                    <button className="contacts__delete" onClick={this.handleRemoveClick}></button>
                    <button className="contacts__edit" onClick={this.handleEditClick}></button>
                </td>
            </tr>
        );
    }
}