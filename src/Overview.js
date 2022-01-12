import React from 'react';

const Overview = (props) => {
  const { tasks, removeTask, changeEditState } = props;

  const renderBasedOnState = (state, task) => {
    if (!state) {
      return <div>{task.text}</div>;
    }
    if (state) {
      return <input></input>;
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
            {/* <div>{task.text}</div> */}
            <button onClick={() => changeEditState(task.id)}>edit</button>
            <button onClick={() => removeTask(task.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
