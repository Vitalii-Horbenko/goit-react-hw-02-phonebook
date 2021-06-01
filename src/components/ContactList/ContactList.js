import React from "react";
import ContactsListItem from "../ContactsListItem";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        <ContactsListItem items={contacts} onDeleteContact={onDeleteContact} />
      </ul>
    </div>
  );
};

export default ContactList;
