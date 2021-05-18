import React from "react";

const MobileDetails = ({ mobile }) => {
  const { name, brand, price, color, ram, rom } = mobile;

  return (
    <React.Fragment>
      <tbody>
        <tr className="">
          <td>{name}</td>
          <td>{brand}</td>
          <td>{price}</td>
          <td>{color}</td>
          <td>{ram}</td>
          <td>{rom}</td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default MobileDetails;
