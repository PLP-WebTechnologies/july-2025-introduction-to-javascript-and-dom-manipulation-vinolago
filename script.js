// Part 1.

const randomAge = Math.floor(Math.random()*99);

// Check if user is below 16 or above 65 then give 25% discount.
if (randomAge <= 16 || randomAge >= 65) { 
    console.log(`You're ${randomAge} years old. Congratulations! You get a 25% discount.`)
    }else {
    console.log(`You're ${randomAge} years old. No discount for you, sorry!`)
}

// Part 2. Function to mask parts of an email (first and last letter before @ visibile)
let email = 'loganp@outsider.com'

    function maskEmail (email) {
        const parts = email.split('@')

        const name = parts[0]
        const domain = parts[1]
        const middle = '*'.repeat(name.length-2)

        const maskedEmail = name[0] + middle + name[name.length-1] + '@' + domain

        return maskedEmail;
} console.log(maskEmail(email));
    
// Part 3: Looping through an array using for loop
const nums = [91,81,31]
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            total += num
    }

console.log(total)

// Looping through an array to remove duplicate 'egg'

function removeLastEggs(foods) {
            let newTray = [];
            let eggCount = 0;

            for (let i = 0; i < foods.length; i++) {
                const result = foods[i];

                if (result === 'egg' && eggCount < 2) {
                    eggCount++
                    continue; //skip this count
                }
                newTray.push(result);
            }
            return newTray;

        }
        console.log(removeLastEggs(['egg', 'apple', 'egg', 'egg', 'mangoes']));

        

// Part 4. Change text of subscribe button

function subscribe () {
    const buttonElement = document.querySelector('.sub-btn');
        if (buttonElement.innerText === 'Subscribe') {
            buttonElement.innerHTML = 'Subscribed';
            buttonElement.classList.add('is-subscribed'); // add new is-subscribed class
                    
        } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed'); // delete is-subscribed class
    }
}

// Listen for keyboard events

function handleCostKeydown(event) { 
            if (event.key === 'Enter') {
                calculateTotal(); // calculate delivery fee if 'Enter' key is pressed.
            }
        }

// Calculate the cost of delivery
function calculateTotal () {
    const inputElement = document.querySelector('.js-cost-input');
    const errorElement = document.querySelector('.js-error-message');
    const costElement = document.querySelector('.js-total-cost');

    let cost = Number(inputElement.value);

    // check for invalid or negative input
    if (isNaN(cost) || cost < 0) {
        errorElement.textContent = 'Error: cost cannot be less than KES 0'
        costElement.textContent = '';
            return;
    }

    // clear any previous error
    errorElement.textContent = '';


    // add delivery fee
    if (cost < 2000) {
        cost += 150;
    }

    costElement.textContent = `KES ${cost}`;
}
