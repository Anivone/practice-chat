import * as request from 'supertest';
import * as mongoose from "mongoose";
import { ExpressConfig } from "../config/ExpressConfig";
import { usersStub } from './stubs';
import * as dotenv from "dotenv";
import * as path from "path";
import { makeTestConnection } from "./tools/TestMongoConfig";

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

describe('Registration', () => {
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

    it('should succeed with a new user', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send(usersStub[0]);

        const user = response.body.user;

        expect(user).toBeDefined();
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('userName');
        expect(user.email).toBe(usersStub[0].email);
        expect(user.userName).toBe(usersStub[0].userName);
    });

    it('should fail because of duplicate email', async () => {
        await request(app).post('/auth/signup').send(usersStub[0]);
        const response = await request(app).post('/auth/signup').send(usersStub[0]);

        expect(response.statusCode).toBe(400);
        expect(response.body.status).toBe('error');
    });
});