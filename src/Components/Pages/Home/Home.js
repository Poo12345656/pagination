import React, { useState } from "react";
import Table from "../../Shared/Table/Table";
import Pagination from "../../Shared/Pagination/Pagination";
import Input from "../../Shared/Input/Input";
import "./Home.css";

const col = ["Method", "Description"];
const data = [
  ["new Map()1", "Creates a new Map"],
  ["set()2", "Sets the value for a key in a Map"],
  ["get()3", "Gets the value for a key in a Map"],
  ["delete()", "Removes a Map element specified by the key"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map"],
  ["new Map()", "Creates a new Map"],
  ["set()", "Sets the value for a key in a Map"],
  ["get()", "Gets the value for a key in a Map"],
  ["delete()", "Removes a Map element specified by the key"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map"],
  ["new Map()", "Creates a new Map"],
  ["set()", "Sets the value for a key in a Map"],
  ["get()", "Gets the value for a key in a Map"],
  ["delete()", "Removes a Map element specified by the key"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map"],
  ["new Map()", "Creates a new Map"],
  ["set()", "Sets the value for a key in a Map"],
  ["get()", "Gets the value for a key in a Map"],
  ["delete()", "Removes a Map element specified by the key"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map"],
  ["new Map()1", "Creates a new Map"],
  ["set()2", "Sets the value for a key in a Map"],
  ["get()3", "Gets the value for a key in a Map"],
  ["delete()", "Removes a Map element specified by the key"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map"],
  ["new Map()", "Creates a new Map"],
  ["set()", "Sets the value for a key in a Map"],
  ["get()", "Gets the value for a key in a Map"],
  ["delete()", "Removes a Map element specified by the key"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map"],
  ["new Map()", "Creates a new Map"],
  ["set()", "Sets the value for a key in a Map"],
  ["get()", "Gets the value for a key in a Map"],
  ["delete()", "Removes a Map element specified by the key"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map"],
  ["new Map()", "Creates a new Map"],
  ["set()", "Sets the value for a key in a Map"],
  ["get()", "Gets the value for a key in a Map"],
  ["delete()", "Removes a Map element specified by the key"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map"],
  ["has()", "Returns true if a key exists in a Map"],
  ["forEach()", "Calls a function for each key/value pair in a Map"],
  ["entries()", "Returns an iterator with the [key, value] pairs in a Map "],
];
function Home() {
  const noOfRows = 10;
  const [activePage, setActivePage] = useState(1);
  const [searchKey, setSearchKey] = useState("") //use hooks
  const handlePageChange = (pageNo) => {
    setActivePage(pageNo);
  };
  const start = (activePage - 1) * noOfRows;
   const row = searchKey.length > 0 ? data.filter((item) => {
          return item.find((value) => {
            return value.toUpperCase().indexOf(searchKey.toUpperCase()) === 0;
          });
        }):data
    
  const end = activePage * noOfRows;
  const result = row.slice(start, end);
  const handleChange =(event)=>{

    const {value} = event.target;
    setSearchKey (value);

  }
  
  return (
    <div>
      <h1 className="heading"> CREATED SIMPLE PAGINATION </h1>
      <div>
        <Input className="searchField" value={searchKey} onChange={handleChange} type="text" placeHolder="Search.." />
      </div>
      <div className="tableWrapper">
        <Table column={col} row={result} />
        <Pagination
          noOfTotalRecord={row.length}
          onPageChange={handlePageChange}
          noOfShowCount={noOfRows}
          activePage={activePage}
        />
      </div>
    </div>
  );
}

export default Home;
