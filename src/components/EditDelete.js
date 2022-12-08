import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const EditDelete = ({editHandler,deleteHandler}) => {
  return (
    <>
      <td>
        <div className="d-flex gap-2">
          <button
            className="btn text-warning"
            onClick={editHandler}
          >
            <AiFillEdit />
          </button>
          <button
            className="btn text-danger"
            onClick={deleteHandler}
          >
            <AiFillDelete />
          </button>
        </div>
      </td>
    </>
  );
};

export default EditDelete;
