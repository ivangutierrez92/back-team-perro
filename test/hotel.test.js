const app= require("../app")
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

// // ? agrupa los test cases
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

describe("POST,/api/hotels", function(){
  it("Debe devolver status 201 al crear hotel",function(done){
    request(app)
      .post("/api/hotels")
      .send({
        name: "HotelPrueba",
        photo:
          "https://pxpics.imgix.net/765/HotelBerna/HomePage/58861d83ac6ad.jpg?auto=format&browser=&h=1000&ixlib=php-3.3.1&w=1900&s=6c8e961a9147a7e910594fdb6890c23d",
        capacity: "12351",
        cityId: "636d2492b99d56d4e6fdc415",
        userId: "636d2492b99d56d4e6fdc415",
      })
      .expect(response=>{
        assert.equal(response.status,201)
      })
      .end(function(err,res){
        if (err) {
          return done(err)
        }
        done()
      })
  })
  it("Debe enviar un numero en el campo capacity",function (done) {
     request(app)
       .post("/api/hotels")
       .send({
         name: "HotelPrueba",
         photo:
           "https://pxpics.imgix.net/765/HotelBerna/HomePage/58861d83ac6ad.jpg?auto=format&browser=&h=1000&ixlib=php-3.3.1&w=1900&s=6c8e961a9147a7e910594fdb6890c23d",
         capacity:"numero",
         cityId: "636d2492b99d56d4e6fdc415",
         userId: "636d2492b99d56d4e6fdc415",
       })
       .expect((response) => {
         assert.isTrue(
           response.body.message.includes('"capacity" must be a number')
         );
       })
       .end(function (err, res) {
         if (err) {
           return done(err);
         }
         done();
       });
    
  })
})

describe("PATCH,/api/hotels/", function () {


  it("La operacion debe ser exitosa", function (done) {
      let token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2U4MmZkNjg2NzIzMmI3NWFjYThkMiIsIm5hbWUiOiJpdmFuIiwicGhvdG8iOiJodHRwczovL21lZGlhLWV4cDEubGljZG4uY29tL2Rtcy9pbWFnZS9DNEUwM0FRRTBiSTNRb1A5TE1BL3Byb2ZpbGUtZGlzcGxheXBob3RvLXNocmlua184MDBfODAwLzAvMTU0MTI5Nzg1OTQ1Mz9lPTIxNDc0ODM2NDcmdj1iZXRhJnQ9dE5qV2hZcTlGVm8zSXF2aThpc2p2UUhOUTBZZ1EwUmhId1h2TVpQUnRqbyIsImxvZ2dlZCI6dHJ1ZSwiaWF0IjoxNjY5NTU4NjM1LCJleHAiOjE2Njk2NDUwMzV9.s7M_xOFShZm9Gftpxhulur3q0fInsS3zuHlVfGafuKw";



     request(app)
      .patch("/api/hotels/636d2ce27c9781cb6b0bc8cb")
      .send({
        "name": "Hotel Testeado",
      })
      .auth(token,{type:"bearer"})
      .expect((response) => {
        assert.equal(response.status, 200);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});




