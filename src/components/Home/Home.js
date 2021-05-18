import app from "../../auth/base";
import React, { useState } from "react";

import AddMobileDetails from "../add-items/AddMobile";
import MobileList from "../mobile/MobileList";

const LOCAL_STORAGE = "mobiles";
const getList = () => {
  const retrieveMobiles = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  return retrieveMobiles ? retrieveMobiles : [];
};

const Home = () => {
  const [mobiles, setMobiles] = useState(() => getList());
  const [inputs, setInputs] = useState("");
  const [showAddInput, setShowAddInput] = useState(false);

  const addMobile = (mobile) => {
    const id = Date.now();
    const list = [...mobiles, { id, ...mobile }];
    setMobiles(list);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(list));
    setShowAddInput(true);
  };

  const sortPrice = (method) => {
    const array = getList();
    if (method === "Lowest to Highest") {
      array.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (method === "Highest to Lowest") {
      array.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    setMobiles(array);
  };

  const filterBrand = (e) => {
    const { value } = e.target;
    setInputs(value);
    let newItems = getList();
    if (value) {
      newItems = newItems.filter((mobile) => {
        const searchList = [mobile.name, mobile.brand]
          .map((item) => item.toLowerCase())
          .filter((item) => item.includes(value.toLowerCase()));
        return searchList.length > 0;
      });
    }

    setMobiles(newItems);
  };

  const onToggle = () => {
    setShowAddInput((prev) => !prev);
  };

  return (
    <div className="container-fluid align-items-center">
      {showAddInput ? (
        <MobileList
          mobiles={mobiles}
          sortPrice={sortPrice}
          filterBrand={filterBrand}
        />
      ) : (
        <AddMobileDetails addMobile={addMobile} />
      )}
      <div className="d-flex flex-row justify-content-center">
        <button
          className="btn-danger px-4 m-3"
          onClick={() => app.auth().signOut()}
        >
          Sign out
        </button>
        <button type="button" className="btn-info px-4 m-3" onClick={onToggle}>
          {!showAddInput ? "View Mobiles" : "Add Mobiles"}
        </button>
      </div>
    </div>
  );
};
export default Home;
