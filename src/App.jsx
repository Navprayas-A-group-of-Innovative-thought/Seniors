import React from "react";
import Jumbotrom from "./components/Jumbotron";
import CardGroup from "./components/CardGroup";
import SeaarchBox from "./components/SearchBox";
import { Seniors } from "./Seniors";

function App() {
  const [searchField, setSearch] = React.useState("");

  // const handleChangeSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  const FilteredSeniors = Seniors.filter((senior) =>
    senior.college.toLowerCase().includes(searchField.toLowerCase())
  );

  console.log("FilteredSeniors", FilteredSeniors);

  const handleFilter = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  // React.useEffect(() => {
  //   handleFilter();
  // }, [Seniors]);
  return (
    <>
      {/** Jumbotrom here */}
      <Jumbotrom />

      <h1 className="text-center">Find Your Seniors</h1>
      {/* Filter methods */}
      <SeaarchBox filter={handleFilter} />
      {/** Container */}
      <CardGroup seniors={FilteredSeniors} />
      {/** Footer */}
    </>
  );
}

export default App;
