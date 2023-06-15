const user = { id: 22, name: 'Hosneara', job: 'prochesta' };
const stringifed = JSON.stringify(user);
console.log(stringifed);

const company = {

    name: "web developerE",
    ceo: {
        name: 'Hosneara',
        id: 1,
        hoby: 'gardening'

    },

    web: {
        work: 'website development',
        employee: 100,
        framework: 'react js',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}

const largeObject = JSON.stringify(company);
console.log(largeObject);

// ekhon data guloke stringify theke purbo obosthy convert orthat parse korte hobe

const convert = JSON.parse(largeObject);
console.log(convert);


//

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}

function displayUser(users) {
    // console.log(user.name);
    for (const user of users) {
        console.log(user.name);
       const ul = document.getElementById('user');
       const li = document.createElement('li');
       li.innerText = user.name;
       ul.appendChild(li)
    }

}
