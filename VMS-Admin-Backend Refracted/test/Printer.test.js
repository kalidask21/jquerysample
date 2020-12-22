process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);
let assert = require('assert');
let sinon = require('sinon');
let PassThrough = require('stream').PassThrough;
let resPrinter;
describe('Printer api', () => {

    it('it should GET all the Printer for Facility', (done) => {
        chai.request(server)
            .get('/api/facility/1/printers')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });
    /*
     * Test the create Printer
     */
    it('it should Create a Printer', (done) => {
        const date = new Date();
        let printer = {
            printer_id: 123456,
            printer_dhcp_name: 'test_printer',
            printer_created_ts: date,
            is_active: 1,
            facility_facility_code: 102
        }
        chai.request(server)
            .post('/api/facility/102/printer/create')
            .send(printer)
            .end((err, res) => {
                resPrinter = res.body.data;
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });
    /*
     * Test the Delete Printer
     */
    it('it should Delete a Printer', (done) => {
        const date = new Date();
         let printer = {
            printer_dhcp_name: 'test_printer',
            printer_created_ts: date,
            is_active: 1,
            facility_facility_code: 102
        }
        let id = resPrinter.printer_id;
        let url = '/api/printer/delete/' + id;
        chai.request(server)
            .put(url)
            .send(printer)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });
});