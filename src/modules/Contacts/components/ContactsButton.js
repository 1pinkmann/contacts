import React from 'react';

export default function ContactsButton ({type, handleClick, title}) {

    return <button type = {type} className="button" onClick = {handleClick}>{title}</button>;
}