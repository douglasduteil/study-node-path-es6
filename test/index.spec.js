
var expect = require('chai').expect;

var foo = require('../index').foo;

describe('foo', function(){

  it('should return "bar"', function(){
    expect(foo()).to.be.equal('bar');
  });

});
