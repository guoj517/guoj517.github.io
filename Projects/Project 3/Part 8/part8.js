const airtableApiKey = "keye0hFqnGOPHFLzw"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appJB1cgyLqqf86RY/Table%201"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

const illustrationContainerElement = document.querySelector('#assets')

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then ((response) => {
    return response.json()
})
jsonPromise.then ((data)=> {
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        console.log(records[index])
        const imageUrl = records[index].fields.image[0].url
        
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)

        illustrationContainerElement.appendChild(containerElement)
        containerElement.appendChild(imageElement)
    }
})
 
