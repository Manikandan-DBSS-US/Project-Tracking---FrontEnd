const FormText = ({ name, labelText, value, changeHandler, alert }) => {
  return (
    <div class="form-group">
      <label for={name}>{labelText}</label>
      <textarea
        onChange={changeHandler}
        class="form-control"
        id={name}
        rows="3"
        name={name}
        value={value}
      ></textarea>
      {alert && <p className={` ${alert && "text-danger"}`}>{alert}</p>}

    </div>
  );
};

export default FormText;
