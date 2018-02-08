"use strict";

class SpotifyApp extends React.Component {
  constructor() {
    super();

    this.state = {
        query : '',
        artist : [],
        albums : [],
        songs : [],

    };
  }
  

  
  findArtist (){





  }

  render() {
    return <div>
        <div className="container boxSearh">
          <div className="text-center boxCenter">

              <Find onKeepInput={this.keepInput.bind(this)} />

          </div>
        </div>
        <div className="container cResult">
          <div className="list-group text-left result" />
        </div>
      </div>;
  }
}

class Find extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    <form onSubmit={e => {
        e.preventDefault();
        this.addTask();
      }} className="card p-1">
      <div className="input-group">
        <input type="text" className="form-control" onChange={this.keepInput} value={this.state.input} placeholder="Search your music..." />
        <div className="input-group-append">
          <button type="submit" className="btn btn-secondary" onClick={e => props.onKeepInput(e.target.value)}>
            Find
          </button>
        </div>
      </div>
    </form>)
  }
}





ReactDOM.render(<SpotifyApp />, document.getElementById("root"));
