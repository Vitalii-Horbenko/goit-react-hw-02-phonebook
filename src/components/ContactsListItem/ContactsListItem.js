import React from "react";
import { v4 as uuidv4 } from "uuid";

const ContactsListItem = ({ items }) => {
  return (
    <div>
      {items.map((contact) => {
        return <li key={uuidv4()}>{`${contact.name}: ${contact.number}`}</li>;
      })}
    </div>
  );
};

export default ContactsListItem;
