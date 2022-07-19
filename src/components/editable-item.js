import React, {useState} from "react";

const EditableItem = (
  {
    item =
      {
        title: 'NEW ITEM',
      },
    deleteItem,
    updateItem
  }
) => {
  const [editing, setEditing] = useState(false);
  const [cachedItem, setCachedItem] = useState(item)
  return (
    <>
      {!editing &&
        <>
          {item.title}
          <i onClick={() => setEditing(true)} className="ms-1 fas fa-edit"></i>
        </>
      }
      {editing &&
        <>
          <span className="row">
              <span className="col-sm-9">
              <input
                onChange={(e) => setCachedItem({
                  ...cachedItem,
                  title: e.target.value
                })}
                className="form-control form-control-sm"
                value={cachedItem.title}
              />
            </span>
            <span className="col-sm-3 d-flex justify-content-end">
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