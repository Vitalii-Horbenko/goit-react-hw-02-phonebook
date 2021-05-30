import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
// import Form from "./components/Form/Form";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div className="App">
        <h2 className="title">Phonebook</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2 className="title">Contacts</h2>
        <ul>
          {this.state.contacts.map((contact) => {
            return (
              <li key={uuidv4()}>{`${contact.name}: ${contact.number}`}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
