import React from 'react'
import {
    AUTH_TOKEN,
    KEY_POST_LOGIN,
    KEY_POST_USERS
} from 'src/helper/constant'


const ApiManager = {
    postRegister: async (data) => {
        return fetch(KEY_POST_USERS, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "auth": AUTH_TOKEN
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        }, function (error) {
            console.log('error', error)
        }).catch((error) => {
            console.log('error', error)
        });
    },
    postUpdateProfile: async (userId, data) => {
        return fetch(`${KEY_POST_USERS}/${userId}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        }, function (error) {
            console.log('error', error)
        }).catch((error) => {
            console.log('error', error)
        });
    },
    getUserProfile: async (userId) => {
        return fetch(`${KEY_POST_USERS}/${userId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json()
        }, function (error) {
            console.log('error', error)
        }).catch((error) => {
            console.log('error', error)
        });
    },
    getAllUsers: async () => {
        return fetch(KEY_POST_USERS, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json()
        }, function (error) {
            console.log('error', error)
        }).catch((error) => {
            console.log('error', error)
        });
    },
    postLogin: async (email, password) => {

        return fetch(KEY_POST_LOGIN, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }).then((response) => {
            return response.json()
        }, function (error) {
            console.log('error', error)
        }).catch((error) => {
            console.log('error', error)
        });
    },
    generateOtp: async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        console.log({ confirmation })
    },
    verifyOtp: async (code) => {

    }
}
module.exports = ApiManager;