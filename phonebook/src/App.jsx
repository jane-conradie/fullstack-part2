import { useState } from "react";

import Search from "./components/Search";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [searchString, setSearchString] = useState("");

  const handleNameInput = (event) => {
    const name = event.target.value;

    setNewName(name);
  };

  const handleNumberInput = (event) => {
    const number = event.target.value;

    setNewNumber(number);
  };

  const handleSearchInput = (event) => {
    const search = event.target.value;

    setSearchString(search);
  };

  const addPerson = () => {
    event.preventDefault();

    const person = {
      name: newName,
      number: newNumber,
    };

    if (
      persons.filter((p) => JSON.stringify(p) === JSON.stringify(person))
        .length > 0
    ) {
      alert(`${person.name} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(person));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search text={searchString} handler={handleSearchInput} />
      <h2>Add a new person</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons searchString={searchString} persons={persons} />
    </div>
  );
};

export default App;
