function SearchBar({ searchWord, searchWordHandler }) {
  return (
    <div>
      <label>
        Search <br />
        <input
          name="myInput"
          type="text"
          value={searchWord}
          onChange={searchWordHandler}
        />
      </label>
    </div>
  );
}

export default SearchBar;
