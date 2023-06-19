import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export class ContactItem extends Component {
  render() {
    const { contact, onDeleteClick } = this.props;

    return (
      <li className={css.item} key={contact.id}>
        <p className={css.text}>
          {contact.name}: {contact.number}
        </p>
        <button className={css.button} onClick={() => onDeleteClick(contact.id)}>
          Delete
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};