import { useState } from "react";

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
      <p>
        filter shown with{" "}
        <input value={searchString} onChange={handleSearchInput} />
      </p>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
          <br />
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchString != ""
        ? persons
            .filter((person) =>
              person.name.toLowerCase().includes(searchString.toLowerCase())
            )
            .map((person) => (
              <p key={person.name}>
                {person.name} {person.number}
              </p>
            ))
        : persons.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))}
    </div>
  );
};

export default App;
