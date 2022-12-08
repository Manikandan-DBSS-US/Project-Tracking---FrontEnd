import React from "react";

const TableHeader = ({ headerData }) => {
  return (
    <>
      <thead className="bg-light">
        <tr>
          {headerData &&
            headerData.map((title, index) => <th  key={index}>{title}</th>)}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
