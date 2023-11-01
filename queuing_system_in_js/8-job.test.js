const queue = require("kue").createQueue();

const createPushNotificationsJobs = require("./8-job").default;
import { expect } from "chai";




describe("is instance of array", () => {
  before(function() {
    queue.testMode.enter();
  });
  
  afterEach(function() {
    queue.testMode.clear();
  });
  
  after(function() {
    queue.testMode.exit()
  });

  it("fails when not array", function() {
    expect(() => {
      createPushNotificationsJobs({}, queue);
    }).to.throw("Jobs is not an array");
  });

  it("expected", function() {
    it("with empty array [] as argument", () => {
      expect(createPushNotificationsJobs([], queue)).to.equal(undefined);
    });
  });
});

