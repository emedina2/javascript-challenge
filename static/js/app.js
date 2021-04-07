// from data.js
var tableData = data;

// YOUR CODE HERE!

// Track events for filter button & date field
var button = d3.select("#filter-btn");
var dateField = d3.select("#datetime");
var enteredDate;
dateField.on("change", ()=>{
    enteredDate = d3.event.target.value
    console.log(enteredDate);
    console.log(`The changed date is ${enteredDate}.`)
})

button.on("click", ()=>{
console.log("Filter button clicked")
console.log(`The entered date is ${enteredDate}.`)
var alienSightings = data.filter(findAliens)
console.log(alienSightings)
});

//create function to filter data
function findAliens(date) {
    return date.datetime === enteredDate;
};

