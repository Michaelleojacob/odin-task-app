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
        placeHolderForEdit: '',
      },
      tasks: [],
    };
  }

  // this handles every keystroke, prior to the submit
  handleTaskCreateInputChange = (e) =>
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        editState: this.state.task.editState,
        placeHolderForEdit: '',
      },
    });

  // this handles the form submit
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
        editState: false,
        placeHolderForEdit: '',
      },
    });
  };

  removeTask = (taskid) => {
    return this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskid),
    });
  };

  changeEditState = (taskid) => {
    this.closeOtherOpenEdits();
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskid ? { ...task, editState: !task.editState } : task,
      ),
    }));
  };

  handleInputFromTaskEdit = (e, taskid) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskid
          ? { ...task, placeHolderForEdit: e.target.value }
          : task,
      ),
    }));
  };

  handleEditSubmit = (e, taskid) => {
    e.preventDefault();
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskid
          ? {
              ...task,
              text: task.placeHolderForEdit,
              placeHolderForEdit: '',
              editState: false,
            }
          : task,
      ),
    }));
  };

  closeOtherOpenEdits = () => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.editState === true ? { ...task, editState: false } : task,
      ),
    }));
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleTaskCreateInputChange}
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
          handleEditSubmit={this.handleEditSubmit}
          handleInputFromTaskEdit={this.handleInputFromTaskEdit}
        />
      </div>
    );
  }
}

export default App;
