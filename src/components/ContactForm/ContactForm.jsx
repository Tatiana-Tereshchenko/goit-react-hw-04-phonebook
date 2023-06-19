import { useState } from 'react';
import PropTypes from 'prop-types'; 
import css from './ContactForm.module.css';

export const ContactForm = ({onAddContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            if (name.trim() === '' || number.trim() === '') return;
            onAddContact({ name, number });
            setName('');
            setNumber('');
    };

        const handleNameChange = (event) => {
            setName( event.target.value);
    };
    
        const handleNumberChange = (event) => {
            const inputNumber = event.target.value;
            const sanitizedNumber = inputNumber.replace(/\D/g, ''); 
            setNumber(sanitizedNumber);
    };
    
    return (
        <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.text}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
        />
        <input className={css.text}
            type="tel"
            name="number"
            placeholder="Phone number"
            value={number}
            onChange={handleNumberChange}
            required
        />
        <button className={css.button} type="submit">Add Contact</button>
        </form>
    )
    }

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};