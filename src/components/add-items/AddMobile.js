import React, { useState } from "react";

const AddMobileDetails = ({ addMobile, history }) => {
  const [newMobile, setNewMobile] = useState({});
  console.log(history);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMobile({ ...newMobile, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addMobile(newMobile);
    setNewMobile({});
  };
  return (
    <>
      <nav className="navbar navbar bg-dark text-white">
        <span className="navbar-brand mb-0 h1 d-flex justify-content-center">
          Add Mobile Details
        </span>
      </nav>
      <form
        className="container d-flex flex-column justify-content-center align-items-center mt-4"
        onSubmit={handleSubmit}
      >
        <div className="col-4 m-1 p-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Mobile Name"
            aria-label="Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-4 m-1 p-3">
          <input
            type="text"
            name="brand"
            className="form-control"
            placeholder="Brand"
            aria-label="Brand"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-4 m-1 p-3">
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Price"
            aria-label="Price"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-4 m-1 p-3">
          <input
            type="text"
            name="color"
            className="form-control"
            placeholder="Color"
            aria-label="Color"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-4 m-1 p-3">
          <input
            type="number"
            name="ram"
            className="form-control"
            placeholder="RAM"
            aria-label="RAM"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-4 m-1 p-3">
          <input
            type="number"
            name="rom"
            className="form-control"
            placeholder="ROM"
            aria-label="ROM"
            onChange={handleChange}
            required
          />
        </div>
        <button className="col-2 m-1 p-1 btn btn-primary">Add Details</button>
      </form>
    </>
  );
};

export default AddMobileDetails;
