var actualdate = new Date();

var today = actualdate.toLocaleDateString();

var firstP = document.getElementById("first-p");

var countries = "United States Mexico Brasil Argentina Chile Panama Irelan South Africa Spain Germany Finland Italy China Japan South Corea New Zeland Australia Philipines"

const getBackButtom = document.querySelector('#backBottom');

const sidepanel = document.querySelector('#accountPannel')

const accountSidepanel = document.querySelector('#accountSidepanel')

var text = firstP.innerHTML;

var listCountries = countries.replace(/ /g, "  |  ");

firstP.innerHTML = "<span style='font-size: 50px;'>" + text[0] + "</span>" + text.substr(1);

document.getElementById("data").innerHTML = today;

window.onscroll = function() {
    if (window.pageYOffset > 50) {
      header.style.backgroundColor = "#333";
      header.style.color = "#fff";
    } else {
      header.style.backgroundColor = "#fff";
      header.style.color = "#333";
    }
  };


document.getElementById("list-countries").innerHTML = listCountries;

getBackButtom.addEventListener("click", function(){ 
  sidepanel.classList.add('hidden');
} );

accountSidepanel.addEventListener("click", function(){ 
  sidepanel.classList.remove('hidden');
} );


