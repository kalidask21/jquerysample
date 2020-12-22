// process.env.NODE_ENV = 'test';

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../server');
// let should = chai.should();
// chai.use(chaiHttp);
// let assert = require('assert');
// let sinon = require('sinon');
// let PassThrough = require('stream').PassThrough;
// let visitRecords;

// describe('Visitor Profile api', () => {

//     it('it should GET all the Visitor where viewBy is all checkin visitors', (done) => {
//         chai.request(server)
//             .get('/api/livevisitorfeed?viewBy=all&page=1')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message').eql('Success');
//                 done();
//             });
//     });
//     it('it should GET all the Visitor where viewBy is current checkin visitors', (done) => {
//         chai.request(server)
//             .get('/api/livevisitorfeed?viewBy=current')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message').eql('Success');
//                 done();
//             });
//     });
//     it('it should GET all the Visitor where viewBy is past checkin visitors', (done) => {
//         chai.request(server)
//             .get('/api/livevisitorfeed?viewBy=past')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message').eql('Success');
//                 done();
//             });
//     });

//     it('it should GET all the Visitor where viewBy is current checkin visitors and search', (done) => {
//         chai.request(server)
//             .get('/api/livevisitorfeed?viewBy=current&search=p')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message').eql('Success');
//                 done();
//             });
//     });

//     it('it should GET all the Visitor where viewBy is upcoming visitors', (done) => {
//         chai.request(server)
//             .get('/api/livevisitorfeed/upcomingVisitors')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message').eql('Success');
//                 done();
//             });
//     });

//     it('it should throw error because upcoming visitor param is not valid', (done) => {
//         chai.request(server)
//             .get('/api/livevisitorfeed/upcomingVisitors?search=$')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message').eql('error');
//                 done();
//             });
//     });

//     // it('it should update the checkout timestamp when visitid is passed', (done) => {
//     //     const date = new Date();
//     //     let visitRecords;
//     //     let visitRecordsMock = {
//     //         visit_id: 2,
//     //         visit_checkout_ts:date,
//     //         visit_checkin_ts: date,
//     //         spcl_escort_rqrd_ind:'N',
//     //         checkin_kiosk_name: 'test kiosk',
//     //         checkout_kiosk_name: 'test kiosk',
//     //         visited_host_fname: 'test fname',
//     //         visited_host_lname: 'test lname',
//     //         sys_checkout_ind: 'Y',
//     //         visitor_profile_visitor_id: '1',
//     //         facility_facility_code: 3
//     //     }
//     //     chai.request(server)
//     //     .put('api/updateCheckout')
//     //     .send(visitRecordsMock)
//     //     .end((err, res) => {
//     //         res.should.have.status(200);
//     //         done();
//     //     });
//     // });

// })