// Write your package code here!
var validGeoJson = Npm.require('geojson-validation');
var geojsonLength = Npm.require('geojson-length');
var geojsonArea = Npm.require('geojson-area');

GeoJsonStats = {
  getLength: function(geojson)
  {
    // check if geojson is a valid geojson object
    if (validGeoJson.valid(geojson))
    {
      console.log("this is valid GeoJSON!");
    }
    if (validGeoJson.isLineString(geojson) || validGeoJson.isMultiLineString(geojson))
    {
      console.log("this is a LineString or a MultiLineString");
    }
    else if (validGeoJson.isFeature(geojson))
    {
      console.log("this is a Feature");
    }
    else
    {
      console.log("cannot determine length for the given input");
      throw new Meteor.Error("cannot determine length for the given input");;
    }

    if (geojson && geojson.geometry)
    {
      var geometry = geojson.geometry;
    }
    else if (geojson && geojson.coordinates)
    {
      var geometry = geojson;
    }
    var length = geojsonLength(geometry);
    console.log('getLength called for the geometry', length);
    return length;
  },
  getArea: function(geojson)
  {
    var geometry = geojson.geometry;
    var area = geojsonArea.geometry(geometry);
    console.log('getArea called for the geometry', geometry);
    return area;
  },
};