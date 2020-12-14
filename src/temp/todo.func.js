import "./todo.css";

const TodoFunc = (props) => {
  const {
    add_task,
    inputchange,
    arrVal,
    search,
    deletebutt,
    editbutt,
    index,
    extraAr,
    updatebutt,
    inputupdate,
    sametaskerr,
    checked,
    inputVal,
    checkbox,
    completedArr,
    completeextraArr,
    checkboxincom,
    indexcom,
    inputupdatecom,
    editbuttCom,
    updatebuttCom,
    deletebuttCom,
    searchCom,
    checkedCom
  } = props;

  const renderArr = arrVal.map((val, idx) => {
    
    return (
      <div key={extraAr.indexOf(val)} className="TodoData">
        <div>
          {
            <input
            checked={checked}
              onChange={(e) => checkbox(e.target.checked,extraAr.indexOf(val))}
              className="check"
              type="checkbox"
            />
          }
        </div>
        <div>
          {index !== extraAr.indexOf(val) ? (
            <li className="todoitems">{val}</li>
          ) : (
            ""
          )}
        </div>
        <div>
          {index === extraAr.indexOf(val) ? (
            <input
              className="todoupdateinput"
              placeholder="Update Task"
              onChange={inputupdate}
            />
          ) : (
            ""
          )}
        </div>

        <div className="todogroup">
          {index !== extraAr.indexOf(val) ? (
            <button
              className="todoeditbutt"
              onClick={() => editbutt(extraAr.indexOf(val))}
            >
              Edit
            </button>
          ) : (
            ""
          )}

          {index === extraAr.indexOf(val) ? (
            <button
              className="todoupdatebutt"
              onClick={() => updatebutt(extraAr.indexOf(val))}
            >
              Update
            </button>
          ) : (
            ""
          )}
          <button
            className="tododeletebutt"
            onClick={() => deletebutt(extraAr.indexOf(val))}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  const renderCom = completedArr.map((valu, idx) => {
    console.log(completeextraArr.indexOf(valu), indexcom);
    return (
      <div key={completeextraArr.indexOf(valu)} className="TodoData2">
        <div>
          {
            <input
            checked={checkedCom}
              onChange={(e) => checkboxincom(e.target.checked,completeextraArr.indexOf(valu))}
              className="check"
              type="checkbox"
            />
          }
        </div>
        
        <div>
          {indexcom !== completeextraArr.indexOf(valu) ? (
            <li className="todoitems"><del  className="strike"> {valu}</del></li>
          ) : (
            ""
          )}
        </div>
        <div>
          {indexcom === completeextraArr.indexOf(valu) ? (
            <input
              className="todoupdateinput"
              placeholder="Update Task"
              onChange={inputupdatecom}
            />
          ) : (
            ""
          )}
        </div>

        <div className="todogroup">
          {indexcom !== completeextraArr.indexOf(valu) ? (
            <button
              className="todoeditbutt"
              onClick={() => editbuttCom(completeextraArr.indexOf(valu))}
            >
              Edit
            </button>
          ) : (
            ""
          )}

          {indexcom === completeextraArr.indexOf(valu) ? (
            <button
              className="todoupdatebutt"
              onClick={() => updatebuttCom(completeextraArr.indexOf(valu))}
            >
              Update
            </button>
          ) : (
            ""
          )}
          <button
            className="tododeletebutt"
            onClick={() => deletebuttCom(completeextraArr.indexOf(valu))}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="maintododiv">
      <div className="todo">
        <h1 className="title">ToDo List</h1>
        <hr className="hrline" />
        <input
          className="todoSearch "
          placeholder="Search Task's"
          onChange={search}
        />

        <div className="alltodosgrp">{renderArr}</div>

        <div className="taskadd">
          <input
            className="todoaddInput"
            placeholder="Create New Task"
            value={inputVal}
            onChange={inputchange}
          />
          <small className="taskerror">{sametaskerr}</small>
          <span onClick={add_task} className="material-icons todoaddButt">
            add_task
          </span>
        </div>
      </div>
      {/* ------------------------------------------------------- */}
      <div className="todo2">
        <h1 className="title">Already Done</h1>
        <hr className="hrline" />
        <input
          className="todoSearch "
          placeholder="Search Task's"
          onChange={searchCom}
        />

        <div className="alltodosgrp">{renderCom}</div>
      </div>
    </div>
  );
};

export default TodoFunc;
