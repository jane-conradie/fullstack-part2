import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Millie Bob" }]);
  const [newName, setNewName] = useState("");

  const handleInput = (event) => {
    const name = event.target.value;

    setNewName(name);
  };

  const addPerson = () => {
    event.preventDefault();

    const person = {
      name: newName,
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
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
