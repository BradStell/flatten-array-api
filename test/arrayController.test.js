const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

// Tests for api endpoint /api/array/
describe('array controller', () => {

    const flattenArrayEndpoint = '/api/array/flatten-array';

    // server should respond with status 200 if correct data format sent in
    it ('should return status 200 with correct data', (done) => {
        chai.request(server)
            .post(flattenArrayEndpoint)
            .send({ data: [1, [2, 3,[4]], 5] })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    // server should respond with status 400 if incorrect data format sent it
    it ('should return status 400 with incorrect data', (done) => {
        chai.request(server)
            .post(flattenArrayEndpoint)
            .send({ data: [1, [2, 3, [4]], '5'] })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    // integration test, server should flatten input array into expected flattened array and return status code 200
    it ('should return flattened array', (done) => {
        const inputArray = [1, 2, [3, [4], 5], 6];
        const expectedOutputArray = [1, 2, 3, 4, 5, 6];

        chai.request(server)
            .post(flattenArrayEndpoint)
            .send({ data: inputArray })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('data');
                let data = res.body.data;
                data.should.deep.equal(expectedOutputArray);
                done();
            });
    });
});