// script.js

// custom function
function calculateTip() {

// store the data of the input
var billAmount = document.getElementById("billAmount").value;
var serviceQuality = document.getElementById("serviceQuality").value;
var numPeople = document.getElementById("numPeople").value;

// quick validation
if(billAmount === "" || serviceQuality == 0) {
    window.alert("Anna! I need numbers, duh!");
    return;// this stops or stops the function from continuing
}

// check to see if this input is empty or less than or equal to 1
if(numPeople === "" || numPeople <= 1) {
    numPeople = 1;

        document.getElementById("each").style.display = "none";

    } else {

        document.getElementById("each").style.display = "block";
    }

// Do some math!
var total = (billAmount * serviceQuality) / numPeople;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);



    // Display the tip!
    document.getElementById("totalTip").style.display = "block";

}
// Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "block";


// clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip() };
document.getElementById("tip").innerHTML = total;






//
