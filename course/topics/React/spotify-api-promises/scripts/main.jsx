"use strict";

class SpotifyApp extends React.Component {
  constructor() {
    super();

    this.state = {
      input:'',
      artist: [],
      albums: [],
      songs: []
    };
  }

insertArtist = artist =>{
  this.setState({ input: artist});

 console.log(artist);

}

  render() {
    return (
      <div>
        <nav className="navbar py-3">
          <a href="#">
            {" "}
            <img
              src="img\Spotify_Logo_RGB_White.png"
              width={150}
              height={50}
              className="d-inline-block align-top ml-2"
              
            />{" "}
          </a>
          <span className="navbar-brand mx-auto">Find your favorite music</span>
        </nav>
        <main className="container-fluid">
          {/* <h2 class="flex-column text-center p-5">Encuentra tu artista favorito</h2> */}
          <div id="search" className=" row">




            <Find onSearch={this.insertArtist}/>




            <button
              type="button"
              id="backToArtists"
              className="btn btn-success mx-auto rounded mb-3 button"
            >
              Back to artists
            </button>
          </div>
          <section className="container-fluid col-12">
            <div id="listArtists" className=" card-columns" />
            <div id="listAlbums" className=" card-columns" />
            <div id="listSongs" className=" card-columns" />
            <div id="error" />
            <div
              className="modal fade"
              id="myPlayer"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title text-center"
                      data-dismiss="modal"
                      id="exampleModalLongTitle"
                    />
                  </div>
                  <div id="player" className="d-flex justify-content-center" />
                  <div className="modal-body" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

class Find extends React.Component {
  constructor() {
    super();


    this.state = {
      
      input: ''

    }
  }

  keepInput = (e) =>{
    this.setState( {input: e.target.value})
  }

  search = (e) =>{
    e.preventDefault();
    this.props.onSearch(this.state.input)
    this.setState({ input: '' });
  }

  render() {
return (
  <form onSubmit = {this.search} className="row justify-content-center col-12">
    <input
      className="form-control form-control-lg mt-5 col-10 text-center text-uppercase font-weight-bold"
      type="text"
      placeholder="search for an artist"
      required
      autoFocus
      onChange={this.keepInput}
      value= {this.state.input}
    />
    <input
      className="btn-success btn-block rounded my-4 py-3 col-6 col align-self-center button"
      type="submit"
      defaultValue="Search"

    />
  </form>
);

    
  }
}

ReactDOM.render(<SpotifyApp />, document.getElementById("root"));
