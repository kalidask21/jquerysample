process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);
let assert = require('assert');
let sinon = require('sinon');
let PassThrough = require('stream').PassThrough;
let resKiosk;
describe('Kiosk api', () => {

    it('it should GET all the Kiosks for Kiosk', (done) => {
        chai.request(server)
            .get('/api/facility/1/kiosks')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });
    
    /*
     * Test the create Kiosk
     */
    it('it should Create a Kiosk', (done) => {
        const date = new Date();
        let kiosk = {
            kiosk_name: 'test_name',
            facility_code: 1,
            kiosk_created_ts: date,
            is_active: 1
        }
        chai.request(server)
            .post('/api/facility/1/create/kiosk')
            .send(kiosk)
            .end((err, res) => {
                resKiosk = res.body.data;
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });
    /*
     * Test the Delete Kiosk
     */
    it('it should Delete a Kiosk', (done) => {
        const date = new Date();
        let kiosk = {
            kiosk_name: 'test_name',
            facility_code: 1,
            kiosk_created_ts: date,
            is_active: 1
        }
        let id = resKiosk.kiosk_reg_code;
        let url = '/api/facility/1/delete/kiosk/' + id;
        chai.request(server)
            .put(url)
            .send(kiosk)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });

    it('it should not Get Kiosks as error param id is not number', (done) => {
        chai.request(server)
            .get('/api/facility/xyz/kiosks')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Failure');
                done();
            });
    });
});