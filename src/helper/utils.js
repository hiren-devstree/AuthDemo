import React from 'react';
const utils={
    randomDate: ()=> {
        let start = new Date(2018, 0, 1);
        let end = new Date();
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}
module.exports = utils ;