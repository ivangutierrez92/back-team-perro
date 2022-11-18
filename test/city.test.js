const app = require("../app");
const assert = require("chai").assert;
const request = require("supertest");

describe("GET /api/cities", function () {
  it("Should return an Array of objects", function (done) {
    request(app)
      .get("/api/cities")
      .expect(response => {
        assert.isArray(response.body.response, "Response of cities must be an array");
        response.body.response.forEach((city) => {
          assert.isObject(city, "Content of array of response must be an Object")
        });
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
 