// YOUR CODE HERE!
var tbody = d3.select("tbody")

// from data.js
var xfile = data;

// initial table
xfile.forEach((sighting) => {
	var row = tbody.append("tr");
	Object.entries(sighting).forEach(([key, value]) => {
	  var cell = row.append("td");
	  cell.text(value);
	});
      });



// // Select the button
var button = d3.select("#filter-btn");

// // Select the form
var form = d3.select("#form");

// // Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// // Complete the event handler function for the form
function runEnter() {
 
  d3.event.preventDefault();
 
  var inputElement = d3.select("#datetime");
  console.log(inputElement);

  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(xfile)

  var filteredData = xfile.filter(xfile => xfile.datetime === inputValue);

  console.log(filteredData);

  var table = d3.select("tbody");
  
  tbody.html("");

  filteredData.forEach((sighting) => {
	var row = tbody.append("tr");
	Object.entries(sighting).forEach(([key, value]) => {
	  var cell = row.append("td");
	  cell.text(value);
	});
      });
};
