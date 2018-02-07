"use strict";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = { people: 0, men: 0, women: 0 };
  }
  addWoman = person => {
    this.setState(prevState => {
      return {
        women: [prevState.women + 1],
        people: [prevState.people + 1]
      };
    });
  };

  addMan = person => {
    this.setState(prevState => {
      return {
        women: [prevState.mem + 1],
        people: [prevState.people + 1]
      };
    });
  };

  render() {
    return;
    <div>
      <Buttons onAddWoman={this.addWoman} onAddMan={this.addMan} />
      <CounterTotal counter={this.people} />
      <CounterWomen women={this.women} />
      <CounterMen man={this.men} />
    </div>;
  }
}

class Buttons extends React.Component {
  constructor() {
    super();
  }

  countWoman = () => {
    this.props.onAddWoman();

  };

  countMan = () => {
    this.props.onAddMan();
 
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if ($_POST["action"] == "Woman") {
            this.countWoman();
          } else {
            this.countMan();
          }
        }}
      >
        <button
          type="submit"
          name="action"
          value="Woman"
          class="round-blue-button"
        >
          Woman
        </button>
        <button
          type="submit"
          name="action"
          value="Man"
          class="round-red-button"
        >
          Man
        </button>
      </form>
    );
  }
}

function CounterTotal(props) {
   
  return <h3> PEOPLE: {people} </h3>  
}

function CounterWomen(props) {

    return <h3> WOMEN: {women} </h3>;
}

function CounterMen(props) {

   return <h3> MEN: {men} </h3>;

}

ReactDOM.render(<Counter/>, document.getElementById("root"));
