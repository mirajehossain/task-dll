const chai = require('chai');
const chaiHttp = require('chai-http');
const only = require('only');
const db = require('../config/database.js');
const app = require('../app');

chai.use(chaiHttp);
const should = chai.should();

db.connection();

describe('routes : /', () => {
  describe('GET /list', () => {
    it('should return all key value list of two string', (done) => {
      chai
        .request(app)
        .get('/list')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.result.should.eql(true);
          res.body.list[0].should.include.keys(
            '_id',
            'strA',
            'strB',
          );
          done();
        });
    });
  });

  describe('POST /add', () => {

    it('should return the the true or false ', (done) => {
      const obj = {
        strA: `ab${Math.random().toString(36).substring(9)}`,
        strB: 'abd',
      };

      chai
        .request(app)
        .post('/add')
        .send(only(obj, 'strA strB'))
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          done();
        });
    });
  });

});
