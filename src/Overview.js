import React from 'react';

const Overview = (props) => {
  const { tasks, deleteTask } = props;
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <div>[index {tasks.indexOf(task) + 1}]</div>
            <div>{task.text}</div>
            <button onClick={() => deleteTask(task.id)}>delete</button>
            <button>edit</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
