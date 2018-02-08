"use strict";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = { people: 0, men: 0, women: 0 };
  }
  addWoman = person => {
    this.setState(prevState => {


      return {
        women: prevState.women + 1,
        people: prevState.people + 1
      };
    });
  };

  addMan = person => {
    this.setState(prevState => {
      return {
        men: prevState.men + 1,
        people: prevState.people + 1
      };
    });
  };

  render() {
    return(
    <div>
      <Buttons onAddWoman={this.addWoman} onAddMan={this.addMan} />
      <CounterTotal counter={this.state.people} /> 
      <CounterWomen women={this.state.women} /> 
      <CounterMen men={this.state.men} />
    </div>)
  }
}

class Buttons extends React.Component {
  constructor() {
    super();
  }

  // countWoman = () => {
  //   this.onAddWoman();

  // };

  // countMan = () => {
  //   this.onAddMan();
 
  // };

  render() {
    return <div>
        <button type="submit" onClick={e => {
            e.preventDefault();
            this.props.onAddWoman();
          }} name="action" value="woman" className="round-blue-button">
          Woman
        </button>
        <button type="submit" onClick={e => {
            e.preventDefault();
            this.props.onAddMan();
          }} name="action" value="man" className="round-red-button">
          Man
        </button>
      </div>
  }
}


function CounterTotal(props) {

  console.log(props);
  return <h3> PEOPLE: {props.counter} </h3>;  
}

function CounterWomen(props) {

    return <h3> WOMEN: {props.women} </h3>;
}

function CounterMen(props) {

   return <h3> MEN: {props.men} </h3>;

}

ReactDOM.render(<Counter/>, document.getElementById("root"));
