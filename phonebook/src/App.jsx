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
      id: persons[persons.length - 1].id + 1,
    };

    if (
      persons.filter(
        (p) => JSON.stringify(p.name) === JSON.stringify(person.name)
      ).length > 0
    ) {
      if (
        window.confirm(
          `${person.name} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        // get person id
        const id = persons.find((p) => person.name === p.name).id;

        // update person
        peopleService.update(id, person).then((updatedPerson) => {
          setPersons(persons.map((p) => (p.id === id ? updatedPerson : p)));
        });
      }
    } else {
      peopleService.create(person).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
      });
    }
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
