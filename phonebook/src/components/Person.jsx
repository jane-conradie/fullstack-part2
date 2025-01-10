const Person = ({ name, number, id, deletePerson }) => {
  return (
    <div>
      <p>
        {name} {number}
      </p>
      <button onClick={() => deletePerson(id, name)}>delete</button>
    </div>
  );
};

export default Person;
