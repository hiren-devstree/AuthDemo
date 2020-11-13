import React from 'react'
import {
    AUTH_TOKEN,
    KEY_POST_LOGIN,
    KEY_USERS,
    KEY_EVENTS
} from 'src/helper/constant'


const ApiManager = {
    postRegister: async (data) => {
        return fetch(KEY_USERS, {
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
        return fetch(`${KEY_USERS}/${userId}`, {
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
        return fetch(`${KEY_USERS}/${userId}`, {
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

    //---------------EVENTS------------------

    postEvent: async (data) => {
        return fetch(KEY_EVENTS, {
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
    postUpdateEvent: async (eventId, data) => {
        return fetch(`${KEY_EVENTS}/${eventId}`, {
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
    getEventDetails: async (eventId) => {
        return fetch(`${KEY_EVENTS}/${eventId}`, {
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
    getAllEvents: async () => {
        return fetch(KEY_EVENTS, {
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
    getServiceProvider: async (eventId) => {
        return fetch(`${KEY_EVENTS}${eventId}/serviceproviders`, {
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