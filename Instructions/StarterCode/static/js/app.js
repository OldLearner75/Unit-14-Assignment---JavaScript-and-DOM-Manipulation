// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function table(data) {

  tbody.html("");
//something is wrong here...
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var ufoInfo = row.append("td");
        ufoInfo.text(val);
      }
    );
  });
}

function buttonClick() {

 d3.event.preventDefault();

  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (date) {

    filteredData = filteredData.filter(row => row.datetime === date);
  }

  table(filteredData);
}

d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);
