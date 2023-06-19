import { Component } from 'react';
import PropTypes from 'prop-types'; 
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid'

export class ContactForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: '',
        number: ''
    };
    }

    handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;
    this.props.onAddContact({ id: nanoid(), name: name.trim(), number: number.trim() });
    this.setState({ name: '', number: '' });
    };

    handleNameChange = (event) => {
    this.setState({ name: event.target.value });
    };

  handleNumberChange = (event) => {
    const inputNumber = event.target.value;
    const sanitizedNumber = inputNumber.replace(/\D/g, ''); 
    this.setState({ number: sanitizedNumber });
};

    render() {
    const { name, number } = this.state;

    return (
        <form className={css.form} onSubmit={this.handleSubmit}>
        <input className={css.text}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleNameChange}
            required
        />
        <input className={css.text}
            type="tel"
            name="number"
            placeholder="Phone number"
            value={number}
            onChange={this.handleNumberChange}
            required
        />
        <button className={css.button} type="submit">Add Contact</button>
        </form>
    );
    }
}


ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};