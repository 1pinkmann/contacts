import React, { Component } from 'react';

export default class ContactsButton extends Component {

    render() {
        return(
            <button type = {this.props.type} className="button" onClick = {this.props.handleClick}>{this.props.title}</button>
        );
    }
}