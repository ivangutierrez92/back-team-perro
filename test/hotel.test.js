const app= require("../app")
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

// ? agrupa los test cases
describe("GET /api/hotels?name=",function(){

// ? it -test cases
it("Deberia devolver un 404 cuando no encuentra un hotel",function (done) {

  let name= 'cualquiera'
  request(app)
  .get('/api/hotels?name='+name)
  .expect(response=>{
   assert.equal(response.status,404)
  
  })
  .end(function (err,res) {
    if(err){
      return done(err)

    }
  done();
  })
})

})
