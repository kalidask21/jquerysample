process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);
let assert = require('assert');
let sinon = require('sinon');
let PassThrough = require('stream').PassThrough;
let resFacility;
let expect = chai.expect;
describe('Facility api', () => {

    it('it should GET all the facilities', (done) => {
        chai.request(server)
            .get('/api/facilities')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });
   
    it('it should GET all the facilities by page', (done) => {
        chai.request(server)
            .get('/api/facilities?page=2')
            .end((err, res) => {
                 console.log(res.body);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');                
                res.body.should.have.property('data');
                done();
            });
    });

    it('it should GET all the facilities by search', (done) => {
        chai.request(server)
            .get('/api/facilities?search=p')
            .end((err, res) => {
                console.log(res.body);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                res.body.should.have.property('data');
                done();
            });
    });
    /*
     * Test the create Facility
     */
    it('it should Create a Facility', (done) => {
        const date = new Date();
        let facility = {
            facility_name: 'test_facility_name',
            facility_st_addr: 'test_facility_st_addr',
            facility_city: 'test_city',
            facility_state: 'test_state',
            facility_zip: '123456',
            facility_country: 'us',
            facility_nda_required: true,
            nda_nda_id: 1,
            facility_created_ts: date,
            facility_updated_ts: date,
            is_active: 1
        }
        chai.request(server)
            .post('/api/facility/create')
            .send(facility)
            .end((err, res) => {
                resFacility = res.body.data;
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });
    /**
     * Test get by id
     */
    it('it should GET the facility by ID', (done) => {
        let id = resFacility.facility_code;
        let url = '/api/facility/' + id;
        chai.request(server)
            .get(url)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });
    /*
     * Test the Update Facility
     */
    it('it should Update a Facility', (done) => {
        const date = new Date();
        let facility = {
            facility_code: resFacility.facility_code,
            facility_name: 'test_update',
            facility_st_addr: 'update_addr',
            facility_city: 'test_city',
            facility_state: 'test_state',
            facility_zip: '123456',
            facility_country: 'us',
            facility_nda_required: true,
            nda_nda_id: 1,
            facility_created_ts: date,
            facility_updated_ts: date,
            is_active: 1
        }
        chai.request(server)
            .put('/api/facility/update')
            .send(facility)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });
    /*
     * Test the Delete Facility
     */
    it('it should delete a Facility', (done) => {
        let id = resFacility.facility_code;
        let url = '/api/facility/' + id + '/delete';
        chai.request(server)
            .put(url)
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                done();
            });
    });

    it('it shoudl give error message on invalid facility', (done) => {
        let id = resFacility.facility_code;
        let url = '/api/facility/' + id 
        chai.request(server)
            .get(url)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Facility not found');
                done();
            });
    });

    it('it should GET the unique location for a facility', (done) => {
        chai.request(server)
        .get('/api/locations')
        .end((err, res) => {
            expect(err).to.be.null;
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Success');
            done();
        });
    });
});