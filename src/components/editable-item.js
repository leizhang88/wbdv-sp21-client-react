import React, {useState} from "react";
import {Link} from "react-router-dom";

const EditableItem = (
  {
    to='/SOMEWHERE/',
    item = {title: 'NEW ITEM'},
    active=false,
    deleteItem=(o) => alert("Delete " + o.title),
    updateItem=(o) => alert("Update " + o.title)
  }
) => {
  const [editing, setEditing] = useState(false);
  const [cachedItem, setCachedItem] = useState(item)
  return (
    <>
      {!editing &&
        <>
          <Link className={`nav-link ${active ? 'active' : ''} d-inline-flex`} to={to}>
            {item.title}
          </Link>
          <i onClick={() => setEditing(true)} className="ms-1 fas fa-edit"></i>
        </>
      }
      {editing &&
        <>
          <span className="d-flex">
              <span className="">
              <input
                onChange={(e) => setCachedItem({
                  ...cachedItem,
                  title: e.target.value
                })}
                className="form-control form-control-sm"
                value={cachedItem.title}
              />
            </span>
            <span className="">
              <i
                onClick={() => {
                  setEditing(false)
                  updateItem(cachedItem)
                }}
                className="ms-1 fas fa-check"></i>
              <i onClick={() => deleteItem(cachedItem)} className="ms-1 fas fa-xmark"></i>
            </span>
          </span>
        </>
      }
    </>
)}

export default EditableItem;