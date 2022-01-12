import React from 'react';
import uniqid from 'uniqid';
import Overview from './Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: { text: '', id: uniqid() },
      tasks: [],
    };
  }

  handleChange = (e) =>
    this.setState({ task: { text: e.target.value, id: this.state.task.id } });

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '', id: uniqid() },
    });
  };

  removeTask = (taskid) => {
    return this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskid),
    });
  };

  editTask = (taskid, newTaskInfo) => {
    this.setState({
      task: (this.state.tasks.find((task) => task.id === taskid).text =
        newTaskInfo),
    });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} deleteTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
