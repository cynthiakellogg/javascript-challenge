// from data.js
var tableData = data;
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");
button.on("click", newInput);

function newInput() {
    tbody.html("");
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    // console.log(filteredData);
    // now we want to 
    filteredData.forEach(function(siting) {
        var row = tbody.append("tr");
        Object.entries(siting).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
              });
    });
  };

//   try { 
//     if(x == "")  throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5)  throw "too low";
//     if(x > 10)   throw "too high";
//   }
//   catch(err) {
//     message.innerHTML = "Input is " + err;
//   }