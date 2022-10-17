import supertest from 'supertest'
import {expect} from "chai";

const request = supertest('https://gorest.co.in/public/v2/')

const TOKEN = '0cd200a4662e501eadfbb0634bd8506e610518c84cca6b2a529df4af709a23f5'

describe('Users', () => {
    let userId;
    describe('POST', () => {
        it('/users',  () => {
            const data = {
                "name":"nombre uno",
                "gender":"male",
                "email":`test-${Math.floor(Math.random() * 9999)}@gmail.com`,
                "status":"active"
            }

            return request
                .post('users')
                .set('Authorization', `Bearer ${TOKEN}`)
                .send(data)
                .then((res) => {
                    // expect(res.body.email).to.eq(data.email)
                    // expect(res.body.status).to.eq(data.status)
                    // console.log(res.body)
                    expect(res.body).to.deep.include(data);
                    userId = res.body.id
                    console.log(userId)
                });
        });
    })

    describe('GET', () => {
        it('/users', () => {
            return request.get(`users?access-token=${TOKEN}`).then((res) => {
                // console.log(res.body)
                expect(res.body).to.be.not.empty;
            });
        });

        it('users/:id', () => {
            return request.get(`users/${userId}?access-token=${TOKEN}`).then((res) => {
                expect(res.body.id).to.be.eq(userId)
            });
        });
    })

    describe('PUT', () => {
        it('PUT /users/:id', () => {
            const data = {
                status: "active",
                name: `Guffy - ${Math.floor(Math.random() * 9999)}`
            }
            return request
                .put(`users/${userId}`)
                .set('Authorization', `Bearer ${TOKEN}`)
                .send(data).then(res => {
                    expect(res.body).to.deep.include(data);
                })
        })
    })

    describe('DELETE', () => {
        it('/users/:id', () => {
            return request
                .delete(`users/${userId}`)
                .set('Authorization', `Bearer ${TOKEN}`)
                .then((res) => {
                    expect(res.body).to.be.empty;
                    expect(res.status).to.be.eq(204)
                })
        })
    })
})
