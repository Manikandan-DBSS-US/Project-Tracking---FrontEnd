const FormRadio = ({
  name,
  type,
  itemList,
  labelText,
  changeHandler,
  value,
  alert,
}) => {
  return (
    <div>
      <h6>{labelText}</h6>
      <div className="d-flex gap-2">
        {itemList.map((item, index ) => {
          return (
            <div key={index}>
              <input name={name} type={type} value={item.value} checked={item.value === value} onChange={changeHandler} />{" "}
              {item.name}
            </div>
          );
        })}
      </div>
      {alert && <p className={` ${alert && "text-danger"}`}>{alert}</p>}
    </div>
  );
};

export default FormRadio;