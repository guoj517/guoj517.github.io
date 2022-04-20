const airtableApiKey = "keye0hFqnGOPHFLzw"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appJB1cgyLqqf86RY/Table%201"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

const illustrationContainerElement = document.querySelector('#assets')

//step 2: get references to DOM
const AContainerElement = document.querySelector('#A')
const BContainerElement = document.querySelector('#B')
const CContainerElement = document.querySelector('#C')

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
        const imageUrl = records[index].fields.image[0].url
        //create container element
        const containerElement= document.createElement('div')
        containerElement.classList.add('container')
        const randomLeft = Math.random() * window.innerWidth * 8
        randomTop = Math.random() * window.innerWidth * 8
        containerElement.style.position = 'absolute'
        containerElement.style.left = randomLeft + "px"
        containerElement.style.top = randomTop + "px"
        //create image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image' , 'A-image')
        imageElement.setAttribute('src',imageUrl)
        //add container element to DOM 
        //add image element to containers
        //add groupA to containers
        AContainerElement.appendChild(containerElement);
        containerElement.appendChild(imageElement); 
        
       // if(records.fields.Name === "A") {
           // AContainerElement.appendChild(containerElement);
            //containerElement.appendChild(imageElement);      
         // }
       // else if(records.fields.Name === "B"){
            //BContainerElement.appendChild(containerElement);
            //containerElement.appendChild(imageElement);
          //}

    }
})


const getRandomPosition = (Math.random() * 100);
console.log(getRandomPosition)
//get a number range from 1 to 100
//position the images with %



