// STEP 1: VARIABLES
const users = [{
    name: "Ruins Greatsword", 
    description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
    attack: 124
},
{
    name: "Eclipse Shotel", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 77, 
},
{
    name: "Grafted Blade Greatsword", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 157, 
},]

// STEP 2: DOM REFERENCES
const usersContainerElement = document.querySelector('#users')
const showUsersWithCreditInDollarsButtonElement = document.querySelector("button#map")
const showstrongUsersButtonElement = document.querySelector('button#strong')
const showUsersSortedByNameAscendingButtonElement = document.querySelector('button#sort-ascending')

// STEP 3: FUNCTIONS
const createUserElement = (user) => {
    // Create Container Element
    const containerElement = document.createElement('div')
    containerElement.classList.add('user')
    // Create Name Element
    const nameElement = document.createElement('p')
    nameElement.innerHTML = 'Name: ' + user.name
    // Create strong Element
    const strongElement = document.createElement('p')
    strongElement.innerHTML = 'strong: ' + user.strong
    // Create attack Element
    const creditElement = document.createElement('p')
    creditElement.innerHTML = 'Attack:' + user.attack
    containerElement.appendChild(nameElement)
    containerElement.appendChild(strongElement)
    containerElement.appendChild(creditElement)
    return containerElement
}

const removeUsers = () => {
    usersContainerElement.innerHTML = ""
}

const addUsers = (users) => {
    users.forEach(user => {
        const userElement = createUserElement(user)
        usersContainerElement.appendChild(userElement)
    });
}

// STEP 4: APPLICATION
// MAP
const usersWithCreditInDollars = users.map((user) => {
    const userWithCreditInDollars = {
        name: user.name, 
        attack: user.attack, 
        strong: user.strong
    }
    const creditInDollars = userWithCreditInDollars.attack / 100 
    userWithCreditInDollars.attack = '%' + creditInDollars
    return userWithCreditInDollars
})

// FILTER
//const strongUsers = users.filter((user) => 
//attack > 100);

// SORT 
const usersSortedByNameAscending = users.sort((userA, userB) => {
    if (userA.name < userB.name) {
        return -1;
      }
      if (userA.name > userB.name) {
        return 1;
      }
    
      // names must be equal
      return 0;
})


// SET EVENT LISTENERS
showUsersWithCreditInDollarsButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersWithCreditInDollars)
})

showstrongUsersButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(strongUsers)
})

showUsersSortedByNameAscendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameAscending)
})

// START APP
addUsers(users)