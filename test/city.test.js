const app = require("../app");
const assert = require("chai").assert;
const request = require("supertest");

describe("GET /api/cities", function () {
  it("Should return an Array of objects", function (done) {
    request(app)
      .get("/api/cities")
      .expect(response => {
        assert.isArray(response.body.response, "Response of cities must be an array");
        response.body.response.forEach(city => {
          assert.isObject(city, "Content of array of response must be an Object");
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

describe("POST /api/cities", function () {
  it("Should recieve in body a string in name field", function (done) {
    request(app)
      .post("/api/cities")
      .send({ name: 5 })
      .expect(response => {
        assert.isTrue(response.body.message.includes("The field 'name' must be a string"));
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
  it("Should have a status 400 when can't make a city", function (done) {
    request(app)
      .post("/api/cities")
      .send({})
      .expect(response => {
      assert.equal(response.status, 400);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});

