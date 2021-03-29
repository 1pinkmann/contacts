import {React, useState} from 'react';
import ContactsButton from './ContactsButton';

export default function ContactsForm ({contact, handleSaveContact, handleHideForm}) {

    const [contactState, setContactState] = useState(
        contact || {
            name: '',
            surname: '',
            phone: ''
        }
    );

    let handleSubmit = (e) => {
        e.preventDefault();
        handleSaveContact(contactState);
    };

    let onInputChange = (e) => {
        setContactState({
            ...contactState, [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <form className='contacts__form' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    className="contacts__form-input" 
                    placeholder="Имя" 
                    value={contactState.name}
                    onChange={onInputChange} 
                />
                <input 
                    type="text" 
                    name="surname" 
                    className="contacts__form-input" 
                    placeholder="Фамилия" 
                    value={contactState.surname}
                    onChange={onInputChange} 
                />
                <input 
                    type="text"
                    name="phone" 
                    className="contacts__form-input" 
                    placeholder="Номер телефона" 
                    value={contactState.phone}
                    onChange={onInputChange} 
                />
                <ContactsButton title="Сохранить" type="submit" />
                <ContactsButton title="Отмена" handleClick={handleHideForm} type="button" />
            </form>
            <div className="background"></div>
        </>
    );
}