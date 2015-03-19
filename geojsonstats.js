var validGeoJson = Npm.require('geojson-validation');
var geojsonLength = Npm.require('geojson-length');
var geojsonArea = Npm.require('geojson-area').geometry;
var geojsonStats = Npm.require('geojson-stats');

GeoJsonStats = {
  /**
   * Returns the length of a LineString or MultiLineString.
   * @function
   * @param {object} geojson - A valid GeoJSON object that contains a LineString or MultiLineString.
   * @returns {number} - The length in meters.
   */
  getLength: function (geojson) {
    var geometry = null;
    var errMsg = 'cannot determine length for the given input';
    // check if geojson is a valid geojson object
    if (!validGeoJson.valid(geojson)) {
      throw new Meteor.Error('cannot determine length for the given input');
    }
    // determine geometry
    if (validGeoJson.isFeature(geojson)) {

      geometry = geojson.geometry;
    } else {
      geometry = geojson;
    }
    // simple geojson *IS* a geometry property
    if (validGeoJson.isLineString(geometry) || validGeoJson.isMultiLineString(geometry)) {
      var length = geojsonLength(geometry);
      return length;
    }
    // Feature Groups and invalid input throw an error
    else {
      throw new Meteor.Error(errMsg);
    }
  },
  /**
   * Returns the area of a Polygon or MultiPolygon.
   * @function
   * @param {object} geojson - A valid GeoJSON object that contains a Polygon or MultiPolygon.
   * @returns {number} - The area in square meters.
   */
  getArea: function (geojson) {
    var geometry = null;
    var errMsg = 'cannot determine area for the given input';
    // check if geojson is a valid geojson object
    if (!validGeoJson.valid(geojson)) {
      throw new Meteor.Error(errMsg);
    }
    // determine geometry
    if (validGeoJson.isFeature(geojson)) {
      geometry = geojson.geometry;
    } else {
      geometry = geojson;
    }
    if (validGeoJson.isPolygon(geometry) || validGeoJson.isMultiPolygon(geometry)) {
      var area = geojsonArea(geometry);
      return area;
    }
    // Feature Groups and invalid input throw an error
    else {
      throw new Meteor.Error(errMsg);
    }

  },
  /**
   * Returns length and area statistics for a GeoJSON object.
   * @function
   * @param {object} geojson - A valid GeoJSON object.
   * @returns {Array.<Object>} - The length in meters.
   */
  getStats: function (geojson) {
    var errMsg = 'cannot determine stats for the given input';
    // check if geojson is a valid geojson object
    if (!validGeoJson.valid(geojson)) {
      throw new Meteor.Error(errMsg);
    }
    var stats = geojsonStats(geojson);
    return stats;
  }
};