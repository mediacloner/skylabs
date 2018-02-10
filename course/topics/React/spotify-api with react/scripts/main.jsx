"use strict";

class SpotifyApp extends React.Component {
  constructor() {
    super();

    this.state = {
      //input: "",
      artists: [],
      albums: [],
      songs: []
    };
  }

  // Search Artist API , insert default images if is empty and push to state.artist
  getArtist = query => {
    spotifyApi
      .searchArtists(query)
      .then(artists => this.insertArtistFormated(artists)) 
      .catch(console.error);
  };

  insertArtistFormated = rawArtistData => {
    this.setState({ artists: this.insertDefaultImg(rawArtistData) });
  };

  insertDefaultImg = objArtist => {
    objArtist.forEach(function(e) {
      if (e.images.length <= 0)
        e.images = [
          { height: 64, url: "images/noimageicon_64x64.png", width: 64 }
        ];
    });

    return objArtist;
  };

  // Find Albums
  getAlbums = query => {
    console.log(query)
    spotifyApi
      .retrieveAlbums(query)
      .then(albumsResult => {this.setState({ artist: [] });this.setState({ albums: albumsResult })})
      .catch(console.error);
  };

  render() {
    return (
      <div>
        <div className="container boxSearh">
          <div className="text-center boxCenter">
            <Find onSearch={this.getArtist} />
          </div>
        </div>
        <div className="container cResult">
          <div className="list-group text-left result" />
          <ListArtist
            findAlbums={this.getAlbums}
            artists={this.state.artists}
          />
          <ListAlbums albums={this.state.albums} />
        </div>
      </div>
    );
  }
}


class Find extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  keepInput = e => {
    this.setState({ input: e.target.value });
  };

  search = e => {
    e.preventDefault();
    this.props.onSearch(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.search} className="card p-1">
        <div className="input-group">
          <input
            type="text"
            onChange={this.keepInput}
            value={this.state.input}
            className="form-control"
            placeholder="Search your music..."
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">
              Find
            </button>
          </div>
        </div>
      </form>
    );
  }
}


  function ListArtist(props) {
    return <div className="list-group text-left result">
        
        {props.artists.map((e, index) => (
          <a
            onClick={(e) => {
            e.preventDefault();
            props.findAlbums(this);
          console.log(e);}}   // TODO: Working with this.
            href="#"
            key={e.id}
            className="list-group-item list-group-item-action list-group-item-success"
            id={e.id}
          >
            <img className="img64" src={e.images[0].url} />
            <p className="textList"> {e.name} </p>
          </a>
        ))}
      </div>;
 }

   function ListAlbums(props) {
     return <div className="list-group text-left result">

 {props.albums.map((e, index) => (
          <a
            onClick={(e) => {
            e.preventDefault();
            props.findAlbums(e.id);}}   // TODO: Working with this.
            href="#"
            key={e.id}
            className="list-group-item list-group-item-action list-group-item-success"
            id={e.id}
          >
            <img className="img64" src={e.images[2].url} />
            <p className="textList"> {e.name} </p>
          </a>
        ))}
       </div>;
   }


ReactDOM.render(<SpotifyApp/>, document.getElementById("root"));
