const airtableApiKey = "keye0hFqnGOPHFLzw"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appTJh4SNTi7XOAW3/Project%203"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

const illustrationContainerElement = document.querySelector('#illustrations')

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then ((response) => {
    return response.json()
})
jsonPromise.then ((data)=> {
    const records = data.records 
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        const imageUrl = records[index].fields.Image[0].url
        
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const titleElement = document.createElement('p')
        titleElement.classList.add('title')
        titleElement.innerHTML = title

        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)

        illustrationContainerElement.appendChild(containerElement)

        containerElement.appendChild(imageElement)

        containerElement.appendChild(titleElement)
    }
})

const 

if (images.class !== undefined) {
    classes = images.class;
  }

  var left = Math.round(Math.random() * 97) + -3;
  var top = Math.round(Math.random() * 97) + -7;

  var size = Math.round(Math.random() * 270) + 100;

  var index = Math.round(Math.random() * 300) + 1;

  var rotation = Math.round(Math.random() * 360) + 1;
