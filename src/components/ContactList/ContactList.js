import React from "react";
import ContactsListItem from "../ContactsListItem";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        <ContactsListItem items={contacts} />
      </ul>
    </div>
  );
};

export default ContactList;
