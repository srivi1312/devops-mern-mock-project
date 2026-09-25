const request = require('supertest');
const {app, server} = require('../index');
const mongoose = require('mongoose');

describe('GET api/tasks', () => {
    it('it should return 200 OK', async() => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toEqual(200);
    });
    it('it should return object and task property ok', async() => {
        const res = await request(app).get('/api/tasks');
        // expect(Array.isArray(res.body)).toBe(true) this is a false case. api shud always return an object with a 'tasks' property.
        // typeof res.body should be 'Array'
        // or more accurately, res.body should have a 'tasks' property that is an array. can alternatively use typeof res.body == 'Array' but that is not standard in JavaScript. because array is also an object type.

        expect(typeof res.body).toBe('object');  // similar condition for checking if return is an object type
        expect(res.body).toHaveProperty('tasks');
    });
});

afterAll(async() => {
    await mongoose.connection.close();
    await server.close();
});

