import React, { Component } from 'react';
import ContactsButton from './ContactsButton';

export default class ContactsForm extends Component {

    state = {
        user: this.props.user || {
            name: '',
            surname: '',
            phone: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSaveContact(this.state.user);
    }

    onInputChange = (e) => {
        this.setState({
            user: {
                ...this.state.user, [e.target.name]: e.target.value
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
                        value={this.state.user.name} 
                        onChange={this.onInputChange} 
                    />
                    <input 
                        type="text" 
                        name="surname" 
                        className="contacts__form-input" 
                        placeholder="Фамилия" 
                        value={this.state.user.surname} 
                        onChange={this.onInputChange} 
                    />
                    <input 
                        type="text"
                        name="phone" 
                        className="contacts__form-input" 
                        placeholder="Номер телефона" 
                        value={this.state.user.phone} 
                        onChange={this.onInputChange} 
                    />
                    <ContactsButton title="Сохранить" type={'submit'} />
                    <ContactsButton title="Отмена" handleClick={this.props.handleShowForm} type={'button'} />
                </form>
                <div className="background"></div>
            </React.Fragment>
        );
    }
}