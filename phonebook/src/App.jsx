import { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import peopleService from "./services/people";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    peopleService.getAll().then((people) => {
      setPersons(people);
    });
  }, []);

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

    peopleService.create(person).then((newPerson) => {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      peopleService.deletePerson(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
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
      <Persons
        searchString={searchString}
        persons={persons}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
