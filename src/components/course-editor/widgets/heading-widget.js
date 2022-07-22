import React, {useState} from "react";

const HeadingWidget = (
  {
    widget,
    deleteWidget,
    updateWidget
  }) => {
  const [editing, setEditing] = useState(false);
  const [cachedWidget, setCachedWidget] = useState(widget);
  return (
    <>
      {editing &&
        <div>
          <div className="input-group">
            <input onChange={e => setCachedWidget({...cachedWidget, text: e.target.value})}
                   value={cachedWidget.text} type="text" className="form-control"/>
              <button  onClick={() => {updateWidget(cachedWidget); setEditing(false)}}
                       className="btn btn-outline-secondary" type="button">
                <i className="fas fa fa-check"></i>
              </button>
              <button onClick={() => {deleteWidget(cachedWidget); setEditing(false)}}
                      className="btn btn-outline-secondary" type="button">
                <i className="fas fa fa-xmark"></i>
              </button>
          </div>
        </div>
      }
      {!editing &&
        <div className="row">
          <div className="col-11">
            <h2>{cachedWidget.text}</h2>
          </div>
          <div className="col-1">
            <button onClick={() => setEditing(true)} className="btn btn-sm btn-light float-end">
              <i className="fas fa fa-edit"></i>
            </button>
          </div>
        </div>

      }
    </>

  )
}

export default HeadingWidget;