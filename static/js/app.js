// from data.js
var tableData = data;

var tbody = d3.select("tbody");




// filteredTableData = [];

var input = d3.select("#datetime");
input.on("change", newInput);

function newInput() {
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    // var newText = d3.event.target.value;
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);
    // now we want to 
    filteredData.forEach(function(siting) {
        var row = tbody.append("tr");
        Object.entries(siting).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
              });
    });
  };

//
  
//   var filteredData = tableData.filter(tableData => tableData.date === inputValue);