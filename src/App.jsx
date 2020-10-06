import React from "react";
import Jumbotrom from "./components/Jumbotron";
import CardGroup from "./components/CardGroup";
import SeaarchBox from "./components/SearchBox";

function App() {
  const [search, setSearch] = React.useState("");
  console.log(search);
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      {/** Jumbotrom here */}
      <Jumbotrom />

      <h1 className="text-center">Find Your Seniors</h1>
      {/* Filter methods */}
      <SeaarchBox Search={handleChangeSearch} />
      {/** Container */}
      <CardGroup />
      {/** Footer */}
    </>
  );
}

export default App;
