const Search = ({ text, handler }) => {
  return (
    <div>
      <p>
        filter shown with <input value={text} onChange={handler} />
      </p>
    </div>
  );
};

export default Search;
