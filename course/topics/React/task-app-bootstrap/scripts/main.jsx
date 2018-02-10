"use strict";
class Task {
  constructor(title) {
    this.id = new Date().getTime();
    //this.id = Task.count++
    this.title = title;
    this.done = false;
  }

  //static count = 0
}

class TaskAppBootstrap extends React.Component {
  constructor() {
    super();

    this.state = { 
      tasks: [] 
    
    };
  }

    addTask = task => {
    this.setState(prevState => {
      return { // tasks: prevState.tasks.concat(this.state.input)
        tasks: [...prevState.tasks, {title : task , done: false}] };

    });
  };

   removeTask(id) {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }))
    }
 

  render() {
    return <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="todolist not-done">
                <h1>Todos</h1>
                <TodosInput onAddTask={this.addTask} />
                <MarkAllDone />
                <hr />
                <List tasks = {this.state.tasks} onRemoveTask={this.removeTask}/>
                <div className="todo-footer">
                  <strong>
                    <span className="count-todos" />
                  </strong> Items Left
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="todolist">
                <h1>Already Done</h1>
                <ul id="done-items" className="list-unstyled">
                  <li>
                    Some item <button className="remove-item btn btn-default btn-xs pull-right">
                      <span className="glyphicon glyphicon-remove" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>;

  }
}



class TodosInput extends React.Component {
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
    return <form onSubmit={e => {
          e.preventDefault();

          this.addTask();
        }}>
        <input type="text" onChange={this.keepInput} value={this.state.input} className="form-control add-todo" placeholder="Add todo" />
      </form>;
  }
}


        

function MarkAllDone(props) {
  return (
    <button id="checkAll" className="btn btn-success">
      Mark all as done
    </button>
  );
}

function List(props) {

  console.log(props);
  return <ul id="sortable" className="list-unstyled">
  
  {props.tasks.map((task, index) => <li className="ui-state-default"  key={index}>
      <div className="checkbox">
        <label>
          <input type="checkbox" defaultValue onClick={e => {
              e.preventDefault();
              props.onRemoveTask(index);
            }}/>
          {task.title} &nbsp;
        </label>
      </div>
    </li>) } 
    </ul>
}

      



ReactDOM.render(<TaskAppBootstrap />, document.getElementById("root"));
