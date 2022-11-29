const app = require("../app");
const assert = require("chai").assert;
const request = require("supertest");
const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");

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
        return done();
      });
  });
});

describe("POST /api/cities", function () {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODE1MzIxMWE5YjkxODk1MmM3MGM4MiIsIm5hbWUiOiJJdsOhbiIsInBob3RvIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MG96NXBVSjZ3WWVCdDdsNm1jaWxIbzRGRkRQTVdEMlJ1cTk0Qjc9czI4OC1wLXJ3LW5vIiwibG9nZ2VkIjp0cnVlLCJpYXQiOjE2Njk1ODMyNDgsImV4cCI6MTY2OTY2OTY0OH0.LobtKPdahyDZ2dhHKMd9wEMbcuUGwDPEXRqId2P_yw8";

  it("Should recieve in body a string in name field", function (done) {
    request(app)
      .post("/api/cities")
      .send({ name: 5 })
      .auth(token, { type: "bearer" })
      .expect(response => {
        assert.isTrue(response.body.message.includes("The field 'name' must be a string"));
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
  it("Should have a succes false when can't make a city", function (done) {
    request(app)
      .post("/api/cities")
      .send({})
      .auth(token, { type: "bearer" })
      .expect(response => {
        assert.isFalse(response.body.success);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});
describe("DELETE /api/cities/:id", function () {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODE1MzIxMWE5YjkxODk1MmM3MGM4MiIsIm5hbWUiOiJJdsOhbiIsInBob3RvIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MG96NXBVSjZ3WWVCdDdsNm1jaWxIbzRGRkRQTVdEMlJ1cTk0Qjc9czI4OC1wLXJ3LW5vIiwibG9nZ2VkIjp0cnVlLCJpYXQiOjE2Njk1ODMyNDgsImV4cCI6MTY2OTY2OTY0OH0.LobtKPdahyDZ2dhHKMd9wEMbcuUGwDPEXRqId2P_yw8";
  it("Should delete a city successfully", function (done) {
    request(app)
      .delete("/api/cities/6383d320386f3616930ab5ff")
      .auth(token, {type: "bearer"})
      .expect(response => {
        assert.isTrue(response.body.success);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
