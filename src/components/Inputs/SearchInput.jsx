const SearchInput = (props) => {
  return (
    <div className="w-full relative py-3.5 px-3">
      <input
        type="text"
        className="w-full h-16 px-6 rounded-lg text-14 text-grayWarm900 dark:bg-grayCool600 dark:text-grayWarm200 dark:placeholder:text-grayWarm200"
        placeholder="Search"
        data-test="search-input"
      />
    </div>
  );
};
export default SearchInput;
