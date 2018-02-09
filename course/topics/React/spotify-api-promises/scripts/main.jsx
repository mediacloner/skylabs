"use strict";

class SpotifyApp extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      artists: [],
      albums: [],
      songs: []
    };
  }

  insertArtist = artist => {
    this.setState({ input: artist });
    this.getArtist(artist);
  };

  getArtist = query => {
    spotifyApi
      .searchArtists(query)
      .then(artists => this.setState({ artists: artists }))
      .catch(console.error);
  };

  getAlbums = idAlbum => {
    spotifyApi
      .retrieveAlbums(idAlbum)
      .then(albums => this.setState({ albums: albums }))
      .catch(console.error);
  };

  getSongs = idSong => {
    spotifyApi
      .retrieveTracks(idSong)
      .then(track => this.setState({ songs: track }))
      .catch(console.error);
  };

  render() {
    return <div>
        <nav className="navbar py-3">
          <a href="#">
            {" "}
            <img src="img\Spotify_Logo_RGB_White.png" width={150} height={50} className="d-inline-block align-top ml-2" />{" "}
          </a>
          <span className="navbar-brand mx-auto">
            Find your favorite music
          </span>
        </nav>
        <main className="container-fluid">
          {/* <h2 class="flex-column text-center p-5">Encuentra tu artista favorito</h2> */}
          <div id="search" className=" row">

            <Find onSearch={this.insertArtist} />

            <button type="button" id="backToArtists" className="btn btn-success mx-auto rounded mb-3 button">
              Back to artists
            </button>
          </div>
          <section className="container-fluid col-12">





            <ListArtists onSearchAlbums={this.getAlbums} resultArtist={this.state.artists} />
            {/* <ListAlbums onSearchSongs={this.getSongs} resultAlbum={this.state.albums} /> */}
            {/* <ListSongs resultSongs={this.state.songs} /> */}




            <div id="error" />
            <div className="modal fade" id="myPlayer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-center" data-dismiss="modal" id="exampleModalLongTitle" />
                  </div>
                  <div id="player" className="d-flex justify-content-center" />
                  <div className="modal-body" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>;
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



function ListArtists(props) {
 return <div id="listArtists" className=" card-columns" />;

  // return <div id="listArtists" className=" card-columns" /> 

  //      // if (props.artists.length < 1) {
  //      //   showError();
  //      //   $("#error").show();
  //      // }
  //       console.log(props.resultArtist);
         props.resultArtist.forEach(artist => {
           if (props.artist.images.length < 1) {
             $("#listArtists").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="artistListed"  data-id="' + artist.id + '"  > <img class="card-img-top img-fluid" src="img/noImage.jpg" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Albums</span></div></div></a></div></div>');
           } else {
             $("#listArtists").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="artistListed"  data-id="' + artist.id + '"  > <img class="card-img-top img-fluid" src="' + artist.images[0].url + '" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Albums</span></div></div></a></div></div>');
           }
         });

  //       //$("#listArtists").show()

      



  
}; 







function ListAlbums(props) {

  //onSearchSongs() 

//   return <div id="listAlbums" className=" card-columns" />


//         props.resultAlbum.forEach(album => {
//           if (props.album.images.length < 1) {
//             $("#listAlbums").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="albumListed" data-name="' + album.name + '" data-id="' + album.id + '"  > <img class="card-img-top img-fluid" src="img/noImage.jpg" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Tracks</span></div></div></a></div></div>');
//           } else {
//             $("#listAlbums").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="albumListed" data-img="' + album.images[0].url + '" data-name="' + album.name + '" data-id="' + album.id + '"  > <img class="card-img-top img-fluid" src="' + album.images[0].url + '" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + album.name + '</h5><span class="info">Show Tracks</span></div></div></a></div></div>');
//           }
//         });

//         //$("#listAlbums").show()
//         //$('#backToArtists').show()
    


};






function ListSongs(props) {
  // onSearchAlbums(); //???
  // return <div id="listSongs" className=" card-columns" />;

  // $(document).on("click", "#albumListed", function(e) {
  //   e.preventDefault();

  //   // get album cover and name to decorate modal background and tittle

  //   const albumId = $(this).attr("data-id");
  //   const albumImage = $(this).attr("data-img");
  //   const albumName = $(this).attr("data-name");

  //   $(".modal-body").css("background-image", 'url("' + albumImage + '")');
  //   $(".modal-title").empty();
  //   $(".modal-title").append(albumName);

  //   // spotifyApi.retrieveTracks(albumId, listSongs, showError)
  // });
};

ReactDOM.render(<SpotifyApp />, document.getElementById("root"));
