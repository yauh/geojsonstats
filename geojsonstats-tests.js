Tinytest.add('getLength - Calc testObjLineStringGeometry', function (test) {
  var testObj = testObjLineStringGeometry;
  var result = GeoJsonStats.getLength(testObj);
  var expected = 376608.7587093914;
  test.equal(result, expected);
});

Tinytest.add('getLength - Calc testObjLineStringFeature', function (test) {
  var testObj = testObjLineStringFeature;
  var result = GeoJsonStats.getLength(testObj);
  var expected = 376608.7587093914;
  test.equal(result, expected);
});

Tinytest.add('getLength - Error testObjPolygonFeature', function (test) {
  var testObj = testObjPolygonFeature;
  var expected = 'cannot determine length for the given input';
  var f = function () {
    GeoJsonStats.getLength(testObj);
  }
  test.throws(GeoJsonStats.getLength, expected);
});

Tinytest.add('getLength - Error nonGeoJson', function (test) {
  var testObj = testObjNonGeoJson;
  var expected = 'cannot determine length for the given input';
  var f = function () {
    GeoJsonStats.getLength(testObj);
  }
  test.throws(GeoJsonStats.getLength, expected);
});

Tinytest.add('getArea - Calc testObjPolygonGeometry', function (test) {
  var testObj = testObjPolygonGeometry;
  var result = GeoJsonStats.getArea(testObj);
  var expected = 137539041347.99316;
  test.equal(result, expected);
});

Tinytest.add('getArea - Calc testObjPolygonFeature', function (test) {
  var testObj = testObjPolygonFeature;
  var result = GeoJsonStats.getArea(testObj);
  var expected = 137539041347.99316;
  test.equal(result, expected);
});

Tinytest.add('getArea - Error testObjLineStringFeature', function (test) {
  var testObj = testObjLineStringFeature;
  var expected = 'cannot determine area for the given input';
  var f = function () {
    GeoJsonStats.getArea(testObj);
  }
  test.throws(GeoJsonStats.getArea, expected);
});

Tinytest.add('getArea - Error nonGeoJson', function (test) {
  var testObj = testObjNonGeoJson;
  var expected = 'cannot determine area for the given input';
  var f = function () {
    GeoJsonStats.getArea(testObj);
  }
  test.throws(GeoJsonStats.getArea, expected);
});

Tinytest.add('getStats - Calc testObjLineStringGeometry', function (test) {
  var testObj = testObjLineStringGeometry;
  var result = GeoJsonStats.getStats(testObj);
  var expected = statsObjLineString;
  test.equal(result, expected);
});

Tinytest.add('getStats - Calc testObjPolygonGeometry', function (test) {
  var testObj = testObjPolygonGeometry;
  var result = GeoJsonStats.getStats(testObj);
  var expected = statsObjPolygon;
  test.equal(result, expected);
});

Tinytest.add('getStats - Error nonGeoJson', function (test) {
  var testObj = testObjNonGeoJson;
  var expected = 'cannot determine stats for the given input';
  var f = function () {
    GeoJsonStats.getStats(testObj);
  }
  test.throws(GeoJsonStats.getStats, expected);
});

Tinytest.add('validate - testObjPolygonGeometry', function (test) {
  var testObj = testObjPolygonGeometry;
  var result = GeoJsonStats.valid(testObj);
  var expected = true;
  test.isTrue(result, expected);
});

Tinytest.add('validate - Error nonGeoJson', function (test) {
  var testObj = testObjNonGeoJson;
  var result = GeoJsonStats.valid(testObj);
  var expected = false;
  test.isFalse(result, expected);
});