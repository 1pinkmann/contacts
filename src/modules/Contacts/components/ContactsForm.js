import React, { Component } from 'react';
import ContactsButton from './ContactsButton';

export default class ContactsForm extends Component {

    state = {
        contact: this.props.contact || {
            name: '',
            surname: '',
            phone: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSaveContact(this.state.contact);
    }

    onInputChange = (e) => {
        this.setState({
            contact: {
                ...this.state.contact, [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <form className='contacts__form' onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        className="contacts__form-input" 
                        placeholder="Имя" 
                        value={this.state.contact.name}
                        onChange={this.onInputChange} 
                    />
                    <input 
                        type="text" 
                        name="surname" 
                        className="contacts__form-input" 
                        placeholder="Фамилия" 
                        value={this.state.contact.surname}
                        onChange={this.onInputChange} 
                    />
                    <input 
                        type="text"
                        name="phone" 
                        className="contacts__form-input" 
                        placeholder="Номер телефона" 
                        value={this.state.contact.phone}
                        onChange={this.onInputChange} 
                    />
                    <ContactsButton title="Сохранить" type="submit" />
                    <ContactsButton title="Отмена" handleClick={this.props.handleHideForm} type="button" />
                </form>
                <div className="background"></div>
            </React.Fragment>
        );
    }
}