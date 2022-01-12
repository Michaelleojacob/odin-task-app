import React from 'react';
import uniqid from 'uniqid';
import Overview from './Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        text: '',
        id: uniqid(),
        editState: false,
      },
      tasks: [],
    };
  }

  // how does handleTaskChange and onSubmitTask interact?
  handleTaskChange = (e) =>
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        editState: this.state.task.editState,
      },
    });

  // how does handleTaskChange and onSubmitTask interact?
  // is it possible to combine them?
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '', id: uniqid(), editState: false },
    });
  };

  removeTask = (taskid) => {
    return this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskid),
    });
  };

  changeEditState = (taskid) => {
    console.log(taskid);
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((el) =>
        el.id === taskid ? { ...el, editState: !el.editState } : el,
      ),
    }));

    // this.setState({ task: this.state.tasks.find(taskToChange) });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleTaskChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview
          tasks={tasks}
          removeTask={this.removeTask}
          changeEditState={this.changeEditState}
        />
      </div>
    );
  }
}

export default App;
