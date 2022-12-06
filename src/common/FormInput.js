import React from "react";

const FormInput = ({ name, type, labelText, value, changeHandler, alert }) => {
  return (
    <div>
      <label htmlFor="">{labelText || name}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        className={`form-control`}
        placeholder={labelText || name}
      />
      {alert && <p className={` ${alert && "text-danger"}`}>{alert}</p>}
    </div>
  );
};

export default FormInput;
