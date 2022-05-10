const airtableApiKey = "keye0hFqnGOPHFLzw"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appaQotaTwgx8sVzc/Table%201"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

const pngContainerElement = document.querySelector('#pngs')

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then ((response) => {
    return response.json()
})
jsonPromise.then ((data)=> {
    const records = data.records 
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        const imageUrl = records[index].fields.image[0].url
        
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')
        const randomLeft = Math.random() * window.innerWidth * 0.8
        randomTop = Math.random() * window.innerWidth * 0.4
        containerElement.style.position = 'absolute'
        containerElement.style.left = randomLeft + "px"
        containerElement.style.top = randomTop + "px"
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)

        pngContainerElement.appendChild(containerElement)

        containerElement.appendChild(imageElement)
        
        dragElement(imageElement);
    }
})





function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.position = 'absolute'
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


