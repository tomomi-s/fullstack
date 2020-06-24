const chai = require('chai');
let should = chai.should(); 
const request = require('supertest');

const app = require('./server');

describe('GET animals', ()=>{
	it('Success get animals', (done)=>{
		request(app).get('/animals')
		.then((res)=>{
			const body = res.body;
			body.should.be.an('array')

			const last_item = body.length - 1;
			let item = body[last_item];
			item.should.have.property('name').to.equal('Shreddy the Teddy')
			item.should.have.property('image').to.equal('https://placebear.com/600/340')
			item.should.have.property('animal').to.equal('bear')                          
                                
			done();
		})
	})
})