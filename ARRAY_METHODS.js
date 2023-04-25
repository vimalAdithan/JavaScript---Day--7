// 1.Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => ele.region === "Asia");
  res.map((ele) => console.log(ele.name.common));
};

// 2.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => ele.population < 200000);
  res.map((ele) => console.log(ele.name.common));
};

// 3.Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  result.forEach((ele) => {
    console.log(`Country name: ${ele.name.common} 
Capital: ${ele.capital}
Flag: ${ele.flag}`);
  });
};

// 4.Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  result.reduce((acc, cv) => acc + cv.population, 0);
  console.log(res1);
};

// 5.Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  result.filter((ele) => {
    for (let key in ele.currencies) {
      if (ele.currencies[key].code === "USD") {
        console.log(ele.name);
      }
    }
  });
};
