const chai = require("chai");
const sinon = require("sinon");
require("sinon-mongoose");
const assert = chai.assert;
const expect = chai.expect;
const Users = require("../model/users.model");

describe("CRUD Mongoose", () => (
  describe("Create API tests", () => {
    let newUsersObjSuccess;
    let newUsersObjFailed;
    let ApiSuccessMock;
    let ApiFailedMock;

    before(() => {
      newUsersObjSuccess = new Users({
        username: "newuser",
        password: "encryptedstring",
        firstname: "new",
        familyname: "user",
        email: "newuser@user.com",
        address: "142 new road",
        phonenumber: "12345678910",
      }); //where username is the required field

      newUsersObjFailed = new Users(
        { username: "faileduser" }, //where username is the required field
      );

      ApiSuccessMock = sinon.mock(newUsersObjSuccess);
      ApiFailedMock = sinon.mock(newUsersObjFailed);

      expectationSuccess = {
        status: 200,
        response: {
          accountcreated: "2020-09-26T01:05:38.711Z",
          accountupdated: "2020-09-26T01:05:38.711Z",
          _id: "5f6e9602cbc91a464877d9e6",
          username: "newuser",
          password: "encryptedstring",
          firstname: "new",
          familyname: "user",
          email: "newuser@user.com",
          address: "142 new road",
          phonenumber: "12345678910",
          __v: 0,
        },
      };
      expectationFailed = {
        status: 500,
        error: {
          ValidationError:
            "password: Path `password` is required., firstname: Path `firstname` is required.",
        },
      };
    });

    after(() => {
      ApiSuccessMock.verify();
      ApiFailedMock.verify();
    });

    /* save() tests */
    it("save() successful", (done) => {
      ApiSuccessMock.expects("save").once().yields(null, expectationSuccess);

      newUsersObjSuccess.save((error, result) => {
        assert.strictEqual(result.status, 200, "status code:200");
        expect(result.response).to.have.ownProperty(
          "accountcreated",
          "2020-09-26T01:05:38.711Z",
          "accountupdated",
          "2020-09-26T01:05:38.711Z",
          "_id",
          "5f6e9602cbc91a464877d9e6",
          "username",
          "newuser",
          "password",
          "encryptedstring",
          "firstname",
          "new",
          "familyname",
          "user",
          "email",
          "newuser@user.com",
          "address",
          "142 new road",
          "phonenumber",
          "12345678910",
          "__v",
          0,
        );
        expect(error).to.be.null;
        done();
      });
    });
    it("save() failed", (done) => {
      ApiFailedMock.expects("save").once().yields(expectationFailed, null);

      newUsersObjFailed.save((err, result) => {
        expect(result).to.be.null;
        assert.strictEqual(err.status, 500, "status code:500");
        expect(err.error).to.have.ownProperty("ValidationError");
      });
      done();
    });
  }),
  describe("Read API tests", () => {
    //creating mock of apimodel
    let ApiMock;
    let expectationFindSuccess;
    let expectationFindFail;
    let expectationFindByIdSuccess;
    let expectationFindByIdFail;

    before(() => {
      ApiMock = sinon.mock(Users);

      expectationFindSuccess = { status: true, Users: {} };
      expectationFindFail = {
        status: false,
        error: "failed to gather data",
      };
      expectationFindByIdSuccess = {
        _id: 1284584,
        firstName: "Bob",
        secondName: "Windy",
      };
      expectationFindByIdFail = {
        status: false,
        error: "no such user exist",
      };
    });

    after(() => {
      ApiMock.verify(); //verifies the expectations from first to last and restore()
      //ApiMock.restore(); //Resets the original method
    });

    /* find() tests */
    it("find() successful", (done) => {
      //expectation

      ApiMock.expects("find")
        .once()
        .withArgs({})
        .yields(null, expectationFindSuccess);

      //use model.find() to get all data
      //CREATED MODEL FOR SCHEMA hence able to use .find() without .exec()
      Users.find({}, (err, result) => {
        expect(result.status).to.be.true;
        expect(err).to.be.null;
        done();
      });
    });

    it("find() failed", (done) => {
      ApiMock.expects("find")
        .once()
        .withArgs({ _id: 1234 })
        .yields(expectationFindFail, null);

      Users.find({ _id: 1234 }, (err, result) => {
        expect(err.status).to.be.not.true;
        expect(result).to.be.null;
        done();
      });
    });

    /* findById() tests */
    it("findById() successfull", (done) => {
      ApiMock.expects("findById")
        .once()
        .withArgs(1284583)
        .yields(null, expectationFindByIdSuccess);

      Users.findById(1284583, (err, resultById) => {
        expect(resultById).to.have.own.property(
          "_id",
          1284584,
          "firstName",
          "Bob",
          "secondName",
          "Windy",
        );
        expect(err).to.be.null;
        done();
      });
    });

    it("findById() failed", (done) => {
      //expectation and return result
      ApiMock.expects("findById")
        .once()
        .withArgs(1284584)
        .yields(expectationFindByIdFail, null);
      //mongoose callback
      Users.findById(1284584, (err, result) => {
        expect(result).to.be.null;
        expect(err.status).to.be.false;
        expect(err.error).to.be.string;
      });
      done();
    });
  }),
  describe("Update API tests", () => {
    let ApiMock;
    let expectationUpdateOneFailed;
    let expectationUpdateOneSuccess;

    before(() => {
      ApiMock = sinon.mock(Users);

      expectationUpdateOneSuccess = {
        status: 200,
        response: { n: 1, nModified: 1, ok: 1 },
      };
      expectationUpdateOneFailed = {
        status: 500,
        DocumentNotFoundError: "$filename not found.",
      };
    });

    after(() => {
      ApiMock.verify();
    });

    it("updateOne() successful", (done) => {
      ApiMock.expects("updateOne")
        .once()
        .withArgs({ username: "newuser" }, { $set: { firstname: "Billy" } })
        .yields(null, expectationUpdateOneSuccess);

      Users.updateOne(
        { username: "newuser" },
        { $set: { firstname: "Billy" } },
        (error, result) => {
          expect(result.status).to.equal(200);
          expect(result.response).to.have.ownProperty(
            "n",
            1,
            "nModified",
            1,
            "ok",
            1,
          );
          expect(error).to.be.null;
        },
      );
      done();
    });

    it("updateOne() failed", (done) => {
      ApiMock.expects("updateOne")
        .once()
        .withArgs({ username: "" }, { $set: { password: "encryptedString" } })
        .yields(expectationUpdateOneFailed, null);

      Users.updateOne(
        { username: "" },
        { $set: { password: "encryptedString" } },
        (err, result) => {
          expect(result).to.be.null;
          expect(err.status).to.equal(500);
          expect(err.response).to.have.ownProperty(
            "DocumentNotFoundError",
            "$filename not found.",
          );
        },
        done(),
      );
    });
  }),
  describe("Delete API tests", () => {
    let ApiMock;
    let expectationDeleteOneFailed;
    let expectationDeleteOneSuccess;

    before(() => {
      ApiMock = sinon.mock(Users);
      expectationDeleteOneSuccess = { status: 200, response: {} };
      expectationDeleteOneFailed = {
        status: 500,
        response: { err: "Deletion failed." },
      };
    });

    after(() => {
      ApiMock.verify();
    });

    it("deleteOne() successful", (done) => {
      ApiMock.expects("deleteOne")
        .once()
        .withArgs({ username: "newuser" })
        .yields(null, expectationDeleteOneSuccess);

      Users.deleteOne({ username: "newuser" }, (err, result) => {
        expect(err).to.be.null;
        expect(result.status).to.equal(200);
        expect(result.response).to.be.empty;
      });
      done();
    });

    it("deleteOne() failed", (done) => {
      ApiMock.expects("deleteOne")
        .once()
        .withArgs({ username: "newuser" })
        .yields(expectationDeleteOneFailed, null);

      Users.deleteOne({ username: "newuser" }, (err, result) => {
        expect(result).to.be.null;
        expect(err.status).to.equal(500);
        expect(err.response).to.have.ownProperty("err", "Deletion failed.");
      });
      done();
    });
  })
));
