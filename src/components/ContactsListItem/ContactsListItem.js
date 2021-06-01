import React from "react";
import { v4 as uuidv4 } from "uuid";

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

export default ContactsListItem;
