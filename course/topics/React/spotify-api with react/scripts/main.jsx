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
    console.log(query);
    spotifyApi
      .retrieveAlbums(query)
      .then(albumsResult => {
        this.setState({ artists: [] });
        this.setState({ albums: albumsResult });
      })
      .catch(console.error);
  };

  // Find Songs
  getSongs = query => {
    console.log(query);
    spotifyApi
      .retrieveTracks(query)
      .then(songsResults => {
        this.setState({ albums: [] });
        this.setState({ songs: songsResults });
      })
      .catch(console.error);
  };

  render() {
    return <div>
        <div className="container boxSearh">
          <div className="text-center boxCenter">
            <Find onSearch={this.getArtist} />
          </div>
        </div>
        <div className="container cResult">
          <div className="list-group text-left result" />
          <ListArtist findAlbums={this.getAlbums} artists={this.state.artists} />
          <ListAlbums findSongs={this.getSongs} albums={this.state.albums} />
          <ListSongs songs={this.state.songs} />
        </div>
      </div>;
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
        {props.artists.map((artist, index) => <a onClick={e => {
              e.preventDefault();
              props.findAlbums(artist.id);
              console.log(artist.id);
            }} href="#" key={artist.id}
             className="list-group-item list-group-item-action list-group-item-success" id={artist.id}>
            <img className="img64" src={artist.images[0].url} />
            <p className="textList"> {artist.name} </p>
          </a>)}
      </div>;
 }

  function ListAlbums(props) {
    return <div className="list-group text-left result">
     {props.albums.map((album, index) => (
             <a
               onClick={(e) => {
               e.preventDefault();
               props.findSongs(album.id);}}  
               href="#"
               key={album.id}
               className="list-group-item list-group-item-action list-group-item-success"
               id={album.id}
              >
                <img className="img64" src={album.images[2].url} />
                <p className="textList"> {album.name} </p>
              </a>
            ))}
           </div>;
       }


  function ListSongs(props) {
    return <div className="list-group text-left result">
      {props.songs.map((songs, index) => (
        <a href="#"
          key={songs.id}
          className="list-group-item list-group-item-action list-group-item-success"
          id={songs.id}>
        
          <p className="textList">{songs.name}</p>
          <div className="player">
            <audio controls>
              <source src={songs.preview_url} type="audio/mp3" />
            </audio>
          </div>
        </a>
      ))}
      </div>;
  }


ReactDOM.render(<SpotifyApp/>, document.getElementById("root"));
