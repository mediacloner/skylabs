/**
 * Spotify API client.
 *
 * @version 1.0.0
 */
var spotifyApi;
(function() {
  "use strict";

  function call(url, token, handleSuccess, handleError, timeout) {
    $.ajax({
      url: url,
      headers: { Authorization: "Bearer " + token },
      timeout: timeout,
      success: handleSuccess,
      error: handleError
    });
  }

  spotifyApi = { baseUrl: "https://api.spotify.com/v1/", token: "BQDMVipMVPLHwN1SMTH-bcFj-ldlwbQVAHYA_Mxfl09bjD4IyRVhJiV_UctG5nRs-Vpc_DlE9z3vN2T-s5Ub8dVZEuXtHsBOvqlNNSGi1IrgzTi0k9zeEp6T2QD_X5X3b_IlaM6s9a_70Eg", timeout: 2000 /**
     * Searches artists by matching a text.
     *
     * @see https://developer.spotify.com/web-api/console/get-search-item/
     *
     * @param {String} query - The text to search.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */, searchArtists: function(query, handleResults, handleError) {
      call(this.baseUrl + "search?type=artist&q=" + query, this.token, function(results) {
          handleResults(results.artists.items);
        }, handleError, this.timeout);
    } /**
     * Retrieve albums from an artist (by artist id).
     *
     * @see https://developer.spotify.com/web-api/console/get-artist-albums/
     *
     * @param {String} artistId - The id of the artist to retrieve the albums from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */, retrieveAlbums: function(artistId, handleResults, handleError) {
      call(this.baseUrl + "artists/" + artistId + "/albums", this.token, function(results) {
          handleResults(results.items);
        }, handleError, this.timeout);
    } /**
     * Retrieve tracks from an album (by album id).
     *
     * @see https://developer.spotify.com/web-api/console/get-album-tracks/
     *
     * @param {String} albumId - The id of the album to retrieve the tracks from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */, retrieveTracks: function(albumId, handleResults, handleError) {
      call(this.baseUrl + "albums/" + albumId + "/tracks", this.token, function(results) {
          handleResults(results.items);
        }, handleError, this.timeout);
    } /**
     * Retrieve track by id.
     *
     * @see https://developer.spotify.com/web-api/console/get-track/
     *
     * @param {String} id - The id of the track to retrieve information from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */, retrieveTrack: function(id, handleResults, handleError) {
      call(this.baseUrl + "tracks/" + id, this.token, handleResults, handleError, this.timeout);
    } };
})();
