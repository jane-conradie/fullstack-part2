const PersonForm = ({
  name,
  number,
  handleNameInput,
  handleNumberInput,
  addPerson,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={name} onChange={handleNameInput} />
        <br />
        number: <input value={number} onChange={handleNumberInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
