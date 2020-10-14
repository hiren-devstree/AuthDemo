// This sample uses a fixed date so the categories can be illustrated better:
var currentDate = new Date('2017/04/27') // Or leave out the argument for actual date
currentDate.setHours(0,0,0,0); // set to midnight
var lastDate = new Date('2000/01/01') // Or leave out the argument for actual date
currentDate.setHours(0,0,0,0); // set to midnight

// Prepare all related dates: yesterday and last Monday
var keys = [];

keys.push(['Today', new Date(currentDate)]); // clone
currentDate.setDate(currentDate.getDate() - 1);
keys.push(['Yesterday', new Date(currentDate)]); // clone
currentDate.setDate(currentDate.getDate() - (currentDate.getDay()+6)%7);
keys.push(['This week', new Date(currentDate)]); // clone
currentDate.setDate(1);
keys.push(['This month', new Date(currentDate)]); // clone
keys.push(['Older', new Date(lastDate)]); // clone

var messages = [
    { date: '2017-03-11' },
    { date: '2017-04-11' },
    { date: '2017-04-21' },
    { date: '2017-04-22' },
    { date: '2017-04-23' },
    { date: '2017-04-24' }, // Monday
    { date: '2017-04-25' },
    { date: '2017-04-26' },
    { date: '2017-04-27' },
];

var messageTypeList = {
    Today: [],
    Yesterday: [],
    "This week": [],
    "This month": [],
    "1 month ago": []
};

messages.forEach( message => {
    var date = message.date.substring(0, 10).replace(/-/g, '\/');
    var messageDate = new Date(date);
    var [key] = keys.find( ([key, date]) => messageDate >= date ) || [];
    if (key) messageTypeList[key].push(message);
});

console.log(messageTypeList);