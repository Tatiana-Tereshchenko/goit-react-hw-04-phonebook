import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  
  const handleDeleteClick = (contactId) => {
    onDeleteContact(contactId);
  };

  const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul className={css.item_contact}>
        {filteredContacts.map((contact) => (
          <ContactItem
            contact={contact}
            onDeleteClick={handleDeleteClick}
            key={contact.id}
          />
        ))}
      </ul>
    );
  }


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};