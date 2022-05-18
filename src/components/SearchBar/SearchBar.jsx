const SearchBar = (props) => {
  const { handleKeyDown } = props;
  return <input type="text" onKeyDown={handleKeyDown} />;
};

export default SearchBar;
