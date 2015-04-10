yauh:geojsonstats
=================

Statistics for GeoJSON objects. This package returns the length and area
for GeoJSON objects.

[![Build Status](https://travis-ci.org/yauh/geojsonstats.svg?branch=master)](https://travis-ci.org/yauh/geojsonstats)


Usage
-----

Install the package via command line:

    $ meteor add yauh:geojsonstats

The package introduces a new global called `GeoJsonStats` which knows
three methods:

-   `getArea`
-   `getLength`
-   `getStats`
-   `validate`

**Note** `GeoJsonStats` is only available on the server, not on the
client!

Examples
--------

### getLength

Supported input types:

-   LineString
-   MultiLineString
-   Feature containing a LineString
-   Feature containing a MultiLineString

Output:

-   Number

#### Code Sample

    var LineString = {
      "type": "LineString",
      "coordinates": [
        [-101.40380859375,
           39.330048552942415],
        [-101.33239746093749,
           39.364032338047984],
        [-101.041259765625,
           39.36827914916011],
        [-100.1953125,
           39.027718840211605]
        ]
    };

    var length = GeoJsonStats.getLength(LineString); // returns 114388.93

### getArea

Supported input types:

-   Polygon
-   MultiPolygon
-   Feature containing a Polygon
-   Feature containing a MultiPolygon

Output:

-   Number

#### Code Sample

    var Polygon = {
      "type": "Polygon",
      "coordinates": [
        [
          [-75.69030761718749,
            35.74205383068037],
          [-76.300048828125,
            35.02999636902566],
          [-76.0858154296875,
            35.29943548054543],
          [-75.69030761718749,
            35.74205383068037]
        ]
      ]
    };

    var area = GeoJsonStats.getArea(Polygon); // returns 61586796.54

### getStats

Supported input types:

-   any GeoJSON object

Output:

-   Array of Objects

#### Code Sample

    var Polygon = {
      "type": "Polygon",
      "coordinates": [
        [
          [-75.69030761718749,
            35.74205383068037],
          [-76.300048828125,
            35.02999636902566],
          [-76.0858154296875,
            35.29943548054543],
          [-75.69030761718749,
            35.74205383068037]
        ]
      ]
    };

    var stats = GeoJsonStats.getStats(Polygon);


    returns
     [{
      title: 'length',
      count: 0,
      mean: null,
      sum: 0,
      variance: null,
      median: null,
      min: undefined,
      max: undefined
    }, {
      title: 'area',
      count: 1,
      mean: 61586796.54,
      sum: 61586796.54,
      variance: 0,
      median: 61586796.54,
      min: 61586796.54,
      max: 61586796.54
    }];

### validate

Supported input types:

-   any

Output:

-   Boolean true/false (valid GeoJson objects return true)

#### Code Sample

    var Polygon = {
      "type": "Polygon",
      "coordinates": [
        [
          [-75.69030761718749,
            35.74205383068037],
          [-76.300048828125,
            35.02999636902566],
          [-76.0858154296875,
            35.29943548054543],
          [-75.69030761718749,
            35.74205383068037]
        ]
      ]
    };

    var stats = GeoJsonStats.validate(Polygon);


    returns
     true



Under the hood
--------------

This package wraps the functionality of
[geojson-stats](https://www.npmjs.com/package/geojson-stats),
[geojson-length](https://www.npmjs.com/package/geojson-length), and
[geojson-area](https://www.npmjs.com/package/geojson-area). It uses
[geojson-validation](https://www.npmjs.com/package/geojson-validation)
to validate GeoJSON objects.
