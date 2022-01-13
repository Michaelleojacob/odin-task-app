import React from 'react';

const Overview = (props) => {
  const { tasks, removeTask, changeEditState } = props;

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
          <form>
            <input></input>
            <div>
              <button>submit</button>
              <button onClick={() => changeEditState(task.id)}>cancel</button>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <ul>
      {tasks.map((task) => {
        console.log(task);
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
