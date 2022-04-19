const airtableApiKey = "keye0hFqnGOPHFLzw"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appJB1cgyLqqf86RY/Table%201"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

const illustrationContainerElement = document.querySelector('#assets')

// Get a 'Promise' Representing the Data that Will be Returned
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    console.log(data)
    const groups = data.records;

    const A = groups.filter((letter) => {
        return letter.fields.catagory === 'A'
    })
    const B = groups.filter((letter) => {
        return letter.fields.catagory === 'B'
    })
    const C = groups.filter((letter) => {
        return letter.fields.catagory === 'C'
    })
})

//step 2: get references to DOM
const AContainerElement = document.querySelector('#A')
const bodyContainerElement = document.querySelector('#body')
const handsContainerElement = document.querySelector('#hands')
const feetContainerElement = document.querySelector('#feet')

//step 3: application
//fetch the data
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})
//get each set of images into their containers
jsonPromise.then((data) => {
    console.log(data)
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        const imageUrl = records[index].fields.Assets[0].url
        const tags = records[index].fields.Tags
        //create container element
        const containerElement= document.createElement('div')
        containerElement.classList.add('container')
        const randomLeft = Math.random() * window.innerWidth * 0.8
        randomTop = Math.random() * window.innerWidth * 0.8
        containerElement.style.position = 'absolute'
        containerElement.style.left = randomLeft + "px"
        containerElement.style.top = randomTop + "px"
        //create image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image' , 'A-image')
        imageElement.setAttribute('src',imageUrl)
        //add container element to DOM 
        //add image element in containers
        //add A to containers
        if (tags.includes("A")){
        AContainerElement.appendChild(containerElement)
        containerElement.appendChild(imageElement)
        }
    }
})


const getRandomPosition = (Math.random() * 100);
console.log(getRandomPosition)
//get a number range from 1 to 100
//position the images with %



