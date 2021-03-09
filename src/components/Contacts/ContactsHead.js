import React, { Component } from 'react';

export default class ContactsHead extends Component {

    render() {
        return(
            <thead>
                <tr>
                    <td>Имя</td>
                    <td>Фамилия</td>
                    <td>Телефон</td>
                    <td>Действия</td>
                </tr>
            </thead>
        );
    }
}