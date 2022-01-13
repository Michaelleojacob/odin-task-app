import React from 'react';

const Overview = (props) => {
  const {
    tasks,
    removeTask,
    changeEditState,
    handleEditSubmit,
    handleInputFromTaskEdit,
  } = props;

  const renderBasedOnState = (state, task) => {
    if (!state) {
      return (
        <div>
          <div>{task.text}</div>
          <button onClick={() => changeEditState(task.id)}>edit</button>
          <button onClick={() => removeTask(task.id)}>delete</button>
        </div>
      );
    }
    if (state) {
      return (
        <div>
          <form onSubmit={(e) => handleEditSubmit(e, task.id)}>
            <input
              value={task.placeHolderForEdit}
              type="text"
              onChange={(e) => handleInputFromTaskEdit(e, task.id)}
            ></input>
            <div>
              <button type="submit">submit</button>
              <button type="cancel" onClick={() => changeEditState(task.id)}>
                cancel
              </button>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li className="taskli" key={task.id}>
            <div>[index {tasks.indexOf(task) + 1}]</div>
            {renderBasedOnState(task.editState, task)}
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
