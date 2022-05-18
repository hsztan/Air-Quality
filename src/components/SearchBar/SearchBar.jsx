const SearchBar = (props) => {
  const { handleKeyDown } = props;
  return (
    <input
      id="nav-search"
      type="text"
      placeholder="search"
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBar;
