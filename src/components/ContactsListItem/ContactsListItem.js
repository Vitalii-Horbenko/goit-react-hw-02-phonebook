import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const ContactsListItem = ({ items, onDeleteContact }) => {
  return (
    <div>
      {items.map((contact) => {
        return (
          <li key={uuidv4()}>
            {`${contact.name}: ${contact.number}`}{" "}
            <button
              type="button"
              name="delete"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

ContactsListItem.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
