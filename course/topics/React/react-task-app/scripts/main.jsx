"use strict";

class TaskApp extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      doneTasks: []
    };
  }

  addTask = task => {
    this.setState(prevState => {
      return { // tasks: prevState.tasks.concat(this.state.input)
        tasks: [...prevState.tasks, task] };

    });
  };

  addDoneTask = task => {
    this.setState(prevState => {
      return { // tasks: prevState.tasks.concat(this.state.input)
         doneTasks: [...prevState.doneTasks, task] };
    });
  };

  // removeTask = index => this.setState(prevState => ({ tasks: prevState.tasks.filter((task, _index) => index !== _index) }))

  // UNCOMPRESSED version ,)
  removeTask = index => {
    this.setState(prevState => {
      this.addDoneTask(prevState.tasks[index]);
      return {
        
        tasks: prevState.tasks.filter((task, _index) => {
          return index !== _index;
          
        })
      };
    });
  };

  render() {
    return <div>
        <TaskInput onAddTask={this.addTask} />
        <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} />
        <DoneTaskList doneTasks={this.state.doneTasks} />
      </div>;
  }
}

class TaskInput extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  keepInput = e => this.setState({ input: e.target.value });

  addTask = () => {
    this.props.onAddTask(this.state.input);

    this.setState({ input: "" });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();

          this.addTask();
        }}
      >
        <input
          type="text"
          className="round-blue-input"
          placeholder="Input task"
          onChange={this.keepInput}
          value={this.state.input}
        />
        &nbsp;
        <button type="submit" className="round-red-button">
          Add
        </button>
      </form>
    );
  }
}

function TaskList(props) {
  

  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li>
          {task} &nbsp;{" "}
          <a
            onClick={e => {
              e.preventDefault();

              props.onRemoveTask(index);
            }}
          >
            ⚡
          </a>
        </li>
      ))}
    </ul>
  );
}


function DoneTaskList(props) {
  return (
    <ul className = 'TextRed' >{props.doneTasks.map((task, index) => <li>{task} &nbsp; ✅ </li>)}</ul>
  );
}
/*
<div>
    <InputTask />
    <TaskList />
</div>
*/

ReactDOM.render(<TaskApp />, document.getElementById("root"));
