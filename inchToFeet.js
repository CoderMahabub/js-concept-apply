
//Inch To Feet
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet ', feet);

var dadInches = 144;
var feet = inchToFeet(dadInches);
console.log('Dad Inchece to Foot ', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('Dadi Inchece to Foot ', feet);

var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log('Dada Inchece to Foot ', feet);


//Mile to Kilometer
function mileToKilometer(miles) {
    var kilometer = miles * 1.60934;
    return kilometer;
}
var mile = 300;
var kilometer = mileToKilometer(mile);
console.log('Marahon in Kilometer: ', kilometer);