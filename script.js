async function generateUsers() {
    try {
        let response = await fetch('https://randomuser.me//api?results=4');
        if (!response.ok) {
            throw new Error(`HTTP Error: Status: ${response.status}`);
        }
        let json = await response.json();
        let PromiseResult = json.results;
        console.log(PromiseResult);
        return PromiseResult;
    } catch (error) {
        console.log('Error:', error);
    }
};
createCards();


createStructure();
function createCards() {
    const users = generateUsers();
    console.log(users);
    for (let index = 0; index < 4; index++) {
        createSingleCard(users[result][index]);
    }

}

function createSingleCard(user) {
    const structure = createStructure();
    console.log(structure);
    console.log(user);
    
    // const finalStructure = addData(structure, user);
    // document.body.appendChild(finalStructure);
}

function createStructure() {
    const card = document.createElement('div');
    card.classList.add('card');
    const upperPart = document.createElement('div');
    upperPart.classList.add('upper');
    const bottomPart = document.createElement('div');
    bottomPart.classList.add('bottom');
    card.appendChild(upperPart);
    card.appendChild(bottomPart);

    const image = document.createElement('img');
    image.classList.add('image');
    const name = document.createElement('h3');
    name.classList.add('name');
    const email = document.createElement('p');
    email.classList.add('email');
    upperPart.appendChild(image);
    upperPart.appendChild(name);
    upperPart.appendChild(email);
    
    const age = document.createElement('p');
    age.classList.add('age');
    const ageLabel = document.createElement('label');
    ageLabel.setAttribute('for', 'age');
    ageLabel.classList.add('ageLabel');
    bottomPart.appendChild(age);
    bottomPart.appendChild(ageLabel);

    const gender = document.createElement('p');
    gender.classList.add('gender');
    const genderLabel = document.createElement('label');
    genderLabel.setAttribute('for', 'gender');
    genderLabel.classList.add('genderLabel');
    bottomPart.appendChild(gender);
    bottomPart.appendChild(genderLabel);

    const location = document.createElement('p');
    location.classList.add('location');
    const locationLabel = document.createElement('label');
    locationLabel.setAttribute('for', 'location');
    locationLabel.classList.add('locationLabel');
    bottomPart.appendChild(location);
    bottomPart.appendChild(locationLabel);

    const phone = document.createElement('p');
    phone.classList.add('phone');
    const phoneLabel = document.createElement('label');
    phoneLabel.setAttribute('for', 'phone');
    phoneLabel.classList.add('phoneLabel');
    bottomPart.appendChild(phone);
    bottomPart.appendChild(phoneLabel);
    document.body.appendChild(card);

    return card;
}

function addData(structure, user) {
    const image = structure.querySelector('.image');
    const name = structure.querySelector('.name');
    const email = structure.querySelector('.email');
    const age = structure.querySelector('.age');
    const ageLabel = structure.querySelector('.ageLabel');
    const gender = structure.querySelector('.gender');
    const genderLabel = structure.querySelector('.genderLabel');
    const location = structure.querySelector('.location');
    const locationLabel = structure.querySelector('.locationLabel');
    const phone = structure.querySelector('.phone');
    const phoneLabel = structure.querySelector('.phoneLabel');
    image.src = user.picture['medium'];
    name.textContent = user['name']['first'] + ' ' + user['name']['last'];
    email.textContent = user['email'];
    age.textContent = user['dob']['age'];
    gender.textContent = user['gender'];
    location.textContent = user['location']['city'];
    phone.textContent = user['phone'];
    return structure;
}