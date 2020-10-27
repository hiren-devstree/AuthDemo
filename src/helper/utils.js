import React from 'react';
import moment from 'moment';
const utils = {
    randomDate: () => {
        let start = new Date(2020, 5, 1);
        let end = new Date();
        let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return moment(date).format("YYYY-MM-DD")
    },
    testDateFilter: (photos) => {
        // This sample uses a fixed date so the categories can be illustrated better:
        var currentDate = new Date() // Or leave out the argument for actual date
        currentDate.setHours(0, 0, 0, 0); // set to midnight
        var lastDate = new Date('2000/01/01') // Or leave out the argument for actual date
        currentDate.setHours(0, 0, 0, 0); // set to midnight

        // Prepare all related dates: yesterday and last Monday
        var keys = [];

        keys.push(['Today', new Date(currentDate)]); // clone
        currentDate.setDate(currentDate.getDate() - 1);
        keys.push(['Yesterday', new Date(currentDate)]); // clone
        currentDate.setDate(currentDate.getDate() - (currentDate.getDay() + 6) % 7);
        keys.push(['This week', new Date(currentDate)]); // clone
        currentDate.setDate(1);
        keys.push(['This month', new Date(currentDate)]); // clone

        var typeList = {
            Today: [],
            Yesterday: [],
            "This week": [],
            "This month": [],
        };
        for (var ind = 1; ind <= currentDate.getMonth(); ind++) {
            var key = ind + " month ago";
            typeList = {
                ...typeList,
                [key]: []
            };
            var newDate = new Date(currentDate);
            newDate.setMonth(newDate.getMonth() - ind);
            console.log(newDate.toString(), currentDate.toString());
            keys.push([key, new Date(newDate)]); // clone
        }
        typeList = {
            ...typeList,
            "Older": []
        };

        keys.push(['Older', new Date(lastDate)]); // clone
        photos.forEach(photo => {
            var date = photo.datetime.substring(0, 10).replace(/-/g, '\/');
            var tDate = new Date(date);
            var [key] = keys.find(([key, date]) => tDate >= date) || [];
            if (key) typeList[key].push(photo);
        });
        let albums = []
        for (let ind in typeList) {
            if (typeList[ind].length > 0) {
                albums.push({
                    "id": `album${ind}`,
                    "name": ind,
                    "designation": "",
                    "profilePhoto": "https://icon-library.com/images/lady-icon/lady-icon-7.jpg",
                    "photos": typeList[ind]
                })
            }
        }
        return albums
    }
}
module.exports = utils;