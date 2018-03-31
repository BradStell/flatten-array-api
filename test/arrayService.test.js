const chai = require('chai');
const arrayService = require('../services/arrayService');
const should = chai.should();

describe('array service', () => {

    // should flatten array - test 1
    it ('flatten-array: should correctly flatten array - 1', (done) => {
        const inArray = [[1, 2, [3]], 4];
        const outArray = [1, 2, 3, 4];

        arrayService.flattenArray(inArray).then((data) => {
            data.should.deep.equal(outArray);
            done();
        });
    });

    // should flatten array - test 2
    it ('flatten-array: should correctly flatten array - 2', (done) => {
        const inArray = [1, 2, [3], [4, [5, 6, [7, [[8]]]]]];
        const outArray = [1, 2, 3, 4, 5, 6, 7, 8];

        arrayService.flattenArray(inArray).then((data) => {
            data.should.deep.equal(outArray);
            done();
        });
    });

    // should flatten array - test 3
    it ('flatten-array: should correctly flatten array - 3', (done) => {
        const inArray = [];
        const outArray = [];

        arrayService.flattenArray(inArray).then((data) => {
            data.should.deep.equal(outArray);
            done();
        });
    });

    // should flatten array - test 4
    it ('flatten-array: should correctly flatten array - 4', (done) => {
        const inArray = [[[1]]];
        const outArray = [1];

        arrayService.flattenArray(inArray).then((data) => {
            data.should.deep.equal(outArray);
            done();
        });
    });


    // should report data error - test 1
    it ('flatten-array: should report data error - 1', (done) => {
        const inArray = [1, 2, [3, '4']];
        const outArray = [];

        arrayService.flattenArray(inArray).catch((err) => {
            err.should.be.a('object');
            err.statusCode.should.equal(400);
            err.should.have.property('message');
            done();
        });
    });

    // should report data error - test 2
    it ('flatten-array: should report data error - 2', (done) => {
        const inArray = [1, 2, [3, 4.234]];
        const outArray = [];

        arrayService.flattenArray(inArray).catch((err) => {
            err.should.be.a('object');
            err.statusCode.should.equal(400);
            err.should.have.property('message');
            done();
        });
    });

    // should report data error - test 3
    it ('flatten-array: should report data error - 3', (done) => {
        const inArray = [1, 2, [3, {}]];
        const outArray = [];

        arrayService.flattenArray(inArray).catch((err) => {
            err.should.be.a('object');
            err.statusCode.should.equal(400);
            err.should.have.property('message');
            done();
        });
    });
});