let countries; //will contain "fetched" data
const countriesList = document.getElementById("countries");
var identifier;

fetch("https://restcountries.eu/rest/v2/all")
	.then(res=> res.json())
	.then(data => initialize(data))
	.catch(err => console.log("Error:",err));

function initialize(countriesData){
	countries = countriesData;
	let options = "";
	countries.forEach(country => $('#countries').append(new Option(country.name, country.capital)));

    $(document).ready(function(){
        $('#countries').formSelect();
    });
}

var id_select = document.getElementById("countries");
var id_select = document.getElementById("informations");

/*document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="ice-cream"]').onchange=pull_info;
},false);*/

function pull_info(id){
	alert(id);
	
}