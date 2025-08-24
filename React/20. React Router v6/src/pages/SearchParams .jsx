import { useSearchParams } from "react-router";

function SearchParams() {
  const [search, setSearch] = useSearchParams();

  const tab = search.get("tab");

  const handleChangeParams = () => {
    setSearch({ tab: "home" });
  };

  return (
    <div>
      <h1>Click the button to change the Search Params.</h1>
      <button onClick={handleChangeParams}>Change Params</button>
      <br />
      <br />
      <h3>Your Tab Param Says: {tab}</h3>
    </div>
  );
}

export default SearchParams;
