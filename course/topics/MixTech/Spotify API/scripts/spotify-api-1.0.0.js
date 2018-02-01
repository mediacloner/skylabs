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

  spotifyApi = { baseUrl: "https://api.spotify.com/v1/",
    token: "BQAnJKA2eBqxJ3L9xVgrico4SPotZF0HbT4138PEeluVz7dwVIEn_BzG79W7sNGpYCGUo4lmJmpFXPOMI8YNHGhS2lheaJ_u0NeGxu2A_n1K0i0IzrmyKRTBTSOXjYi6b0ZR-0CAxl-NX1g",
    timeout: 2000,
    /**
     * Searches artists by matching a text.
     *
     * @param {String} query - The text to search.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    searchArtists: function(query, handleResults, handleError) {
      call(this.baseUrl + "search?type=artist&q=" + query, this.token, function(results) {
          handleResults(results.artists.items);
        }, handleError, this.timeout);
    },
    /**
     * Retrieve albums from an artist (by artist id).
     *
     * @param {String} artistId - The id of the artist to retrieve the albums from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    retrieveAlbums: function(artistId, handleResults, handleError) {
      call(this.baseUrl + "artists/" + artistId + "/albums", this.token, function(results) {
          handleResults(results.items);
        }, handleError, this.timeout);
    },
    /**
     * Retrieve tracks from an album (by album id).
     *
     * @param {String} albumId - The id of the album to retrieve the tracks from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    retrieveTracks: function(albumId, handleResults, handleError) {
      // TODO implement album's tracks retrieval by means of endpoint https://api.spotify.com/v1/albums/{id}/tracks
    },
    /**
     * Retrieve track by id.
     *
     * @param {String} id - The id of the track to retrieve information from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    retrieveTracks: function(id, handleResults, handleError) {
      // TODO implement track information retrieval by means of endpoint https://api.spotify.com/v1/tracks/{id}
    } };
})();
