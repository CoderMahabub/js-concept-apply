//Three Types of Variable
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

//Array
var partners = ['sajid', 'mojid', 'lajid', 'pajid', 'padish'];
var elementsCount = partners.length;
var mojidIndex = partners.indexOf('mojid');
partners.push('kajid');
partners.pop();


//Conditionals
if (bookPrice < 120) {
    console.log('I will buy the book');
}
else {
    console.log('Mama, kisu char den na');
}

//While Loop
var i = 0;
while (i <= 8) {
    //do something
    i++;
}

//For Loop
for (var i = 0; i <= 8; i++) {
    //do some calcualtion
}

//function

function isMoonUp(time) {
    if (time <= 19 && time <= 5) {
        return true;
    };
    return false;
}
var moonStatus = isMoonUp(21);

//object
var house = {
    room: 4,
    window: 2,
    door: 1,
    wallColor: 'blue'
}
var newDoor = house.door;
house.room = 5;
house["door"] = 2;
console.log(house);

//let const

//Value of variable could change
let price = 27;
price = 29;
price = 31;

//Value of variable will not change
const myName = 'Mr. Rahim';
console.log(myName);