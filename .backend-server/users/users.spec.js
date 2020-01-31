const Users = require("../users/users-model.js");
const db = require("../database/dbConfig");
const request = require("supertest");
const server = require("../api/server.js");
describe("users-Model", function() {
    beforeEach(async() => {
        await db("users").truncate();
    });
    describe("Environment", function() {
        it("run in test env", function() {
            expect(process.env.DB_ENV).toBe("testing");
        });
    });
    describe("users-model insert", function() {
        it("adds the user", async function() {
            await Users.add({ username: "test", password: "Password" });
            const users = await db("users");
            expect(users).toHaveLength(1);
        });
    });
    describe("Get Users", function() {
        it("Retruns 200:OK", async function() {
            await request(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });
});