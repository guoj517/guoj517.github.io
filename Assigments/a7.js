// SECTION 1: VARIABLES
// Our API Key for Airtable
const airtableApiKey = "keye0hFqnGOPHFLzw";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/apponEtn4cJCtgXPE/Table%201";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

// SECTION 2: DOM References 
const bodyElement = document.querySelector('body')
const applicationElement = document.querySelector('#application')
const colorElement = document.querySelector('#color')
const adjElement = document.querySelector('#adj')
const timeElement = document.querySelector('#time')


// SECTION 3: Application


// Get a 'Promise' Representing the Data that Will be Returned
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    console.log(data)
    const words = data.records;

    const colors = words.filter((word) => {
        return word.fields.catagory === 'color'
    })
    const times = words.filter((word) => {
        return word.fields.catagory === 'time'
    })
    const adjs = words.filter((word) => {
        return word.fields.catagory === 'adj'
    })


    // Set Values onto HTML Elements 
    colorElement.innerHTML = colors[Math.floor(Math.random()*colors.length)].fields.text
    adjElement.innerHTML = adjs[Math.floor(Math.random()*adjs.length)].fields.text
    timeElement.innerHTML = times[Math.floor(Math.random()*times.length)].fields.text
    applicationElement.classList.add('loaded')
  })
  .catch((error) => {
    console.log(error);
  });
