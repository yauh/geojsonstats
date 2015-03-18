Tinytest.add('getLength - testObjLineStringGeometry', function(test)
{
  var testObj = testObjLineStringGeometry;
  var length = GeoJsonStats.getLength(testObj);

  test.equal(376608.7587093914, length);
});

Tinytest.add('getLength - testObjLineStringFeature', function(test)
{
  var testObj = testObjLineStringFeature;
  var length = GeoJsonStats.getLength(testObj);
  test.equal(376608.7587093914, length);
});

Tinytest.add('getLength - nonGeoJson', function(test)
{
  var testObj = testObjNonGeoJson;
  var expectedErrorMsg = "cannot determine length for the given input";
  var f = GeoJsonStats.getLength(testObj);
  test.throws(f, expectedErrorMsg);
});

//Tinytest.add('getArea - testObjPolygon', function(test)
//{
//  var area = GeoJsonStats.getArea(testObjPolygonGeometry);
//});