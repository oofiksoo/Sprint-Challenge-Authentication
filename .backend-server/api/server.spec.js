const request = require("supertest");
const server = require("./server.js");

describe("server", function() {
    it("runs the test", function() {
        expect(true).toBe(true);
    });
    describe("Get /", function() {
        it("Retruns 200:OK", async function() {
            await request(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
        it("Retruns JSON", async function() {
            await request(server)
                .get("/")
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });
        it("Retruns API:UP", async function() {
            await request(server)
                .get("/")
                .then(res => {
                    expect(res.body.api).toBe("up");
                });
        });
    });
});