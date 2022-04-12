// STEP 1: VARIABLES
const weapons = [{
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
const weaponsContainerElement = document.querySelector('#weapons')
const showweaponsWithPercentageAttackElement = document.querySelector("button#map")
const showStrongWeapon = document.querySelector('button#strongWeapon')
const showweaponsSortedByNameAscendingButtonElement = document.querySelector('button#sort-ascending')

// STEP 3: FUNCTIONS
const createweaponElement = (weapon) => {
    // Create Container Element
    const containerElement = document.createElement('div')
    containerElement.classList.add('weapon')
    // Create Name Element
    const nameElement = document.createElement('p')
    nameElement.innerHTML = 'name: ' + weapon.name
    // Create description Element
    const descriptionElement = document.createElement('p')
    descriptionElement.innerHTML = 'description: ' + weapon.description
    // Create attack Element
    const attackElement = document.createElement('p')
    attackElement.innerHTML = 'attack:' + weapon.attack
    // Create strong Element
    const strongElement = document.createElement('p')
    strongElement.innerHTML = 'strong:' + weapon.strong

    containerElement.appendChild(nameElement)
    containerElement.appendChild(descriptionElement)
    containerElement.appendChild(attackElement)
    containerElement.appendChild(strongElement)
    
    return containerElement
}

const removeweapons = () => {
    weaponsContainerElement.innerHTML = ""
}

const addweapons = (weapons) => {
    weapons.forEach(weapon => {
        const weaponElement = createweaponElement(weapon)
        weaponsContainerElement.appendChild(weaponElement)
    });
}

// STEP 4: APPLICATION
// MAP
const weaponsWithPercentageAttack = weapons.map((weapon) => {
    const weaponsWithPercentageAttack = {
        name: weapon.name, 
        attack: weapon.attack, 
        description: weapon.description
    }
    const attackInDollars = weaponsWithPercentageAttack.attack / 100 
    weaponsWithPercentageAttack.attack = '%' + attackInDollars
    return weaponsWithPercentageAttack
})

// FILTER
var input = attck (9,3,4.3,24,54,8,19,23,46,87,3.14);

var newArray = attack ();
input.forEach(function(attack){
    if(attack > 100)
    {
    return weaponsWithPercentageAttack
    }

})

// SORT 
const weaponsSortedByNameAscending = weapons.sort((weaponA, weaponB) => {
    if (weaponA.name < weaponB.name) {
        return -1;
      }
      if (weaponA.name > weaponB.name) {
        return 1;
      }
    
      // names must be equal
      return 0;
})


// SET EVENT LISTENERS
showweaponsWithPercentageAttackElement.addEventListener('click', () => {
    removeweapons()
    addweapons(weaponsWithPercentageAttack)
})

showStrongWeapon.addEventListener('click', () => {
    removeweapons()
    addweapons(strong)
})

showweaponsSortedByNameAscendingButtonElement.addEventListener('click', () => {
    removeweapons()
    addweapons(weaponsSortedByNameAscending)
})

// START APP
addweapons(weapons)

