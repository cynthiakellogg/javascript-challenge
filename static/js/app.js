// from data.js
var tableData = data;

var tbody = d3.select("tbody");
tableData.forEach(function(siting) {
    console.log(siting);
    var row = tbody.append("tr");
    Object.entries(siting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
          });
});

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.