
// STEP 1: VARIABLES
const users = [{
    name: "Kayne Laing", 
    authenticated: true,
    credit: 1043
}, {
    name: "Percy Hurley", 
    authenticated: true,
    credit: -123
}, {
    name: "Bethany Benton", 
    authenticated: false,
    credit: 145
}, 
{
    name: "Hailie Rooney", 
    authenticated: false,
    credit: 14
},
{
    name: "Lowri Currie", 
    authenticated: true,
    credit: 93723
},]

// STEP 2: DOM REFERENCES
const usersContainerElement = document.querySelector('#users')
const showUsersWithCreditInDollarsButtonElement = document.querySelector("button#map")
const showAuthenticatedUsersButtonElement = document.querySelector('button#authenticated')
const showUsersSortedByNameAscendingButtonElement = document.querySelector('button#sort-ascending')
const showUsersSortedByNameDescendingButtonElement = document.querySelector('button#sort-descending')

// STEP 3: FUNCTIONS
const createUserElement = (user) => {
    // Create Container Element
    const containerElement = document.createElement('div')
    containerElement.classList.add('user')
    // Create Name Element
    const nameElement = document.createElement('p')
    nameElement.innerHTML = 'Name: ' + user.name
    // Create Authenticated Element
    const authenticatedElement = document.createElement('p')
    authenticatedElement.innerHTML = 'Authenticated: ' + user.authenticated
    // Create Credit Element
    const creditElement = document.createElement('p')
    creditElement.innerHTML = 'Credit:' + user.credit
    containerElement.appendChild(nameElement)
    containerElement.appendChild(authenticatedElement)
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
        credit: user.credit, 
        authenticated: user.authenticated
    }
    const creditInDollars = userWithCreditInDollars.credit / 100 
    userWithCreditInDollars.credit = '$' + creditInDollars
    return userWithCreditInDollars
})

// FILTER
const authenticatedUsers = users.filter((user) => {
    return user.authenticated
})

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

usersSortedByNameDescending = usersSortedByNameAscending.slice().reverse() 

// SET EVENT LISTENERS
showUsersWithCreditInDollarsButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersWithCreditInDollars)
})

showAuthenticatedUsersButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(authenticatedUsers)
})

showUsersSortedByNameAscendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameAscending)
})

showUsersSortedByNameDescendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameDescending)
})

// START APP
addUsers(users)
