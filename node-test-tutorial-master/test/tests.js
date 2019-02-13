// ./test/tests.js

var server = require('../lib/server.js');
var expect = require('chai').expect;
var request = require('request');
var stateListObject;
describe('server response', function() {
  before(function () {
    server.listen(8000);
  });

  after(function () {
    server.close();
  });

  it('should return 200', function (done) {
    var options = {
      url: 'http://services.groupkt.com/state/get/USA/all',
    };
    request.get(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return 55 records found', function (done) {
    var options = {
      url: 'http://services.groupkt.com/state/get/USA/all',
    };
    request.get(options, function (err, res, body) {
      expect(typeof res).to.equal('object');
      expect(JSON.parse(res.body).RestResponse.messages[0]).to.equal('Total [55] records found.');
      expect(JSON.parse(res.body).RestResponse.result.length).to.equal(55);
      if(JSON.parse(res.body).RestResponse.result){
        stateListObject =JSON.parse(res.body).RestResponse.result;}
      done();
    });
  });
  

});


/* Example */
var assert = require('assert');
describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
        //throw {myError:'throwing error to fail test'}
    });

});
// var assert = require('assert');
var search =  require('../lib/search.js');

describe('Search', function () {

  describe('Sgould Return Largest City when passed Abbreviation', function(){

    it('should return Largest City of MN is Minneapolis ', function(){
      var state = search.getState(stateListObject, 'MN');
      // console.log(stateListObject);
      assert.equal(state.largest_city, 'Minneapolis');
    });  
    it('should return Capital City of MN is St. Paul ', function(){
      var state = search.getState(stateListObject, 'MN');
      // console.log(stateListObject);
      assert.equal(state.capital, 'St. Paul');
    });
  });
  describe('Sgould Return Largest City when passed State Name', function(){

    it('should return Largest City of Minnesota is Minneapolis ', function(){
      var state = search.getState(stateListObject, 'Minnesota');
      // console.log(stateListObject);
      assert.equal(state.largest_city, 'Minneapolis');
    });  
    it('should return Capital City of Minnesota is St. Paul ', function(){
      var state = search.getState(stateListObject, 'Minnesota');
      // console.log(stateListObject);
      assert.equal(state.capital, 'St. Paul');
    });
  });

});
