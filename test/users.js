import supertest from 'supertest'
import {expect} from "chai";

const request = supertest('https://gorest.co.in/public/v2/')

const TOKEN = '0cd200a4662e501eadfbb0634bd8506e610518c84cca6b2a529df4af709a23f5'

describe('Users', () => {
    it('GET /users', () => {
        // request.get(`users?access-token=${TOKEN}`).end((err, res) => {
        //     expect(res.body).to.be.not.empty;
        //     done();
        // });

        return request.get(`users?access-token=${TOKEN}`).then((res) => {
            console.log(res.body)
            expect(res.body).to.be.not.empty;
        });
    });

    it('POST /users',  () => {

        const data = {
            "name":"nombre uno",
            "gender":"male",
            "email":"otrotest1@15ce.com",
            "status":"active"
        }

        return request
            .post('users')
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                console.log(res.body);
            });
    });
})
