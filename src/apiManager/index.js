import React from 'react'
import {
    KEY_POST_LOGIN
} from 'src/helper/Constants'




const apiManager = {
    postLogin: async (email, password) => {
        console.log({ email, password })
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
module.exports = apiManager;