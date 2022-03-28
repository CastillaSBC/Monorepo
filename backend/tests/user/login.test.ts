import request from 'supertest'
import { server } from "../../structures/server"
describe("Test invalid login.", () => {
    test("It Should not login.", async () => {
        const response = await request(server.express)
            .post("/user/login")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send({
                username: "",
                password: ""
            });
        expect(response.statusCode).toBe(404)
    });
})

