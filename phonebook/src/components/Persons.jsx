import Person from "./Person";

const Persons = ({ searchString, persons }) => {
  const results =
    searchString != ""
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(searchString.toLowerCase())
        )
      : persons;

  return results.map((person) => (
    <Person key={person.name} name={person.name} number={person.number} />
  ));
};

export default Persons;