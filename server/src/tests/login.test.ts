import * as dotenv from "dotenv";
import * as path from "path";
import * as mongoose from "mongoose";
import { makeTestConnection } from "./tools/TestMongoConfig";
import { ExpressConfig } from "../config/ExpressConfig";
import * as request from "supertest";
import { usersStub } from "./stubs";

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

describe('Login', () => {
    let app: Express.Application;
    let connection: mongoose.Connection;

    beforeAll(async () => {
        connection = await makeTestConnection();
        app = new ExpressConfig(connection).app;
    });

    beforeEach(async () => {
        await connection.collection('users').deleteMany({});
        await connection.collection('accounts').deleteMany({});
    })

    afterAll(async () => {
        await connection.close()
    });

    it('should succeed with existing user', async () => {
        await request(app).post('/auth/signup').send(usersStub[0]);
        const response = await request(app).post('/auth/login')
            .send({
                phone: usersStub[0].phone,
                password: usersStub[0].password
            });
        const user = response.body.user;

        expect(user).toBeDefined();
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('userName');
        expect(user.email).toBe(usersStub[0].email);
        expect(user.userName).toBe(usersStub[0].userName);
    });

    it('should fail due to invalid phone', async () => {
        await request(app).post('/auth/signup').send(usersStub[0]);
        const response = await request(app).post('/auth/login')
            .send({
                phone: 'invalid phone',
                password: usersStub[0].password
            });
        const user = response.body.user;

        expect(user).toBeUndefined();
    });

    it('should fail due to invalid password', async () => {
        await request(app).post('/auth/signup').send(usersStub[0]);
        const response = await request(app).post('/auth/login')
            .send({
                phone: usersStub[0].phone,
                password: 'invalid password'
            });
        const user = response.body.user;

        expect(user).toBeUndefined();
    });
});