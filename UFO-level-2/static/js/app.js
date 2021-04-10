// from data.js
var tableData = data;

// YOUR CODE HERE!

// Track events for filter button & date field
var button = d3.select("#filter-btn");
var dateField = d3.select("#datetime");
var enteredDate;
var sightingTable = d3.select("tbody");
var cityDropDown = d3.select("city");


dateField.on("change", ()=>{
    enteredDate = d3.event.target.value
    console.log(enteredDate);
    console.log(`The changed date is ${enteredDate}.`)
})

//button actions
button.on("click", ()=>{
console.log("Filter button clicked")
console.log(`The entered date is ${enteredDate}.`)
var alienSightings = data.filter(findAliens)
console.log(alienSightings)
sightingTable.html("")
for (var s = 0; s < alienSightings.length; s++) {
    sightingData(alienSightings[s])
}

});

//create function to filter data
function findAliens(date) {
    return date.datetime === enteredDate;
};

//function to append data to table
function sightingData(sightings){
    
    sightingTable.append("tr")
    sightingTable.append("td").text(sightings.datetime)
    sightingTable.append("td").text(sightings.city)
    sightingTable.append("td").text(sightings.state)
    sightingTable.append("td").text(sightings.country)
    sightingTable.append("td").text(sightings.shape)
    sightingTable.append("td").text(sightings.durationMinutes)
    sightingTable.append("td").text(sightings.comments)
}

//create list of cities for drop down menu
var allCities = [];
for (var s = 0; s < data.length; s++) {
    getCities(data[s])
};
console.log(allCities)
   
var cityList = allCities.filter(filteredCities);
console.log(cityList)

function getCities (c){
    allCities.push(c.city)
};

function filteredCities (v, i, a) {
    return a.indexOf(v) === i;
};

//cityList.forEach(cityDropDown.append('li').text())