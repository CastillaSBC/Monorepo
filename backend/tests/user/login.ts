import request from "supertest"
import { server } from "./../../structures/server"
describe("Test invalid login.", () => {
    test("It Should not login.", async () => {
        const response = await request(server.express)
            .post("/")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send({
                username: "Jonh",
                password: "Doe"
            });
        expect(response.statusCode).toBe(400 || 404);

    });
});

