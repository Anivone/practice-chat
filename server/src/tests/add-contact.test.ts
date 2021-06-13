import { makeTestConnection } from "./tools/TestMongoConfig";
import { ExpressConfig } from "../config/ExpressConfig";
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";
import * as path from "path";
import * as request from 'supertest';
import { contactsStub, usersStub } from "./stubs";
import exp = require("constants");

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

describe('Add Contact', () => {
    let app: Express.Application;
    let connection: mongoose.Connection;

    beforeAll(async () => {
        connection = await makeTestConnection();
        app = new ExpressConfig(connection).app;
    });

    beforeEach(async () => {
        await connection.collection('contacts').deleteMany({});
    })

    afterAll(async () => {
        await connection.close()
    });

    it('should add new contact', async () => {
        await request(app).post('/auth/signup').send(usersStub[0]);

        const response = await request(app)
            .post('/contacts').send({
                userNickname: usersStub[0].nickname,
                ...contactsStub[0]
            })
        const contact = response.body;

        expect(contact).toBeDefined();
        expect(contact).toHaveProperty('contactName');
        expect(contact).toHaveProperty('contactSurname');
        expect(contact.contactName).toBe(contactsStub[0].contactName);
        expect(contact.contactSurname).toBe(contactsStub[0].contactSurname);
    });

    it('should fail because of not existing user with such nickname', async () => {
        await request(app).post('/auth/signup').send(usersStub[0]);

        const response = await request(app)
            .post('/contacts').send({
                userNickname: 'invalid nickname',
                ...contactsStub[0]
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.status).toBe('error');
    });

    it('should fail because of duplicate contactName and contactSurname', async () => {
        await request(app).post('/auth/signup').send(usersStub[0]);
        await request(app).post('/contacts').send({
            userNickname: usersStub[0].nickname,
            ...contactsStub[0]
        });

        const response = await request(app).post('/contacts').send({
            userNickname: usersStub[0].nickname,
            ...contactsStub[0]
        });

        expect(response.statusCode).toBe(400);
        expect(response.body.status).toBe('error');
    })
});