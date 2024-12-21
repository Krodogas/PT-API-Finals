function loadRandomCoffee() {
    fetch('https://api.sampleapis.com/coffee/iced')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomCoffee = data[randomIndex];
            displayCoffee(randomCoffee);
        })
        .catch(error => {
            console.error("Error fetching coffee data:", error);
        });
}

function displayCoffee(coffee) {
    const coffeeDisplay = document.getElementById('coffee-display');
    coffeeDisplay.innerHTML = '';

    const coffeeItem = document.createElement('div');
    coffeeItem.classList.add('coffee-item');

    const coffeeImage = document.createElement('img');
    coffeeImage.src = coffee.image;
    coffeeImage.alt = coffee.title;

    const coffeeTitle = document.createElement('h3');
    coffeeTitle.textContent = coffee.title;

    const coffeeDescription = document.createElement('p');
    coffeeDescription.textContent = coffee.description;

    coffeeItem.appendChild(coffeeImage);
    coffeeItem.appendChild(coffeeTitle);
    coffeeItem.appendChild(coffeeDescription);

    coffeeDisplay.appendChild(coffeeItem);
}

window.onload = loadRandomCoffee;
