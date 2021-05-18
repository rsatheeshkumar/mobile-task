import React, { useState } from "react";
import MobileDetails from "./MobileDetails";

const MobileList = ({ mobiles, sortPrice, filterBrand }) => {
  const [value, setValue] = useState("Select");
  const setList = (e) => {
    setValue(e.target.value);
    sortPrice(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar bg-dark text-white">
        <span className="navbar-brand mb-0 h1 d-flex justify-content-center">
          Mobile List
        </span>
      </nav>
      <div className="container">
        <div className="d-flex flex-row justify-content-around">
          <span className="sort-list">
            Sort by Price :{" "}
            <select value={value} onChange={setList}>
              <option value="Select">Select</option>
              <option value="Highest to Lowest">Highest to Lowest</option>
              <option value="Lowest to Highest">Lowest to Highest</option>
            </select>
          </span>
          <span>
            Search Brand :
            <input type="text" onChange={filterBrand} />
          </span>
          <span></span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">brand</th>
              <th scope="col">price</th>
              <th scope="col">color</th>
              <th scope="col">ram</th>
              <th scope="col">rom</th>
            </tr>
          </thead>
          {mobiles.map((mobile) => {
            return <MobileDetails key={mobile.id} mobile={mobile} />;
          })}
        </table>
      </div>
    </>
  );
};

export default MobileList;
