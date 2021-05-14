function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response =>  response.json()
    );
}

async function init() {
    const user = await fetchUser();
    console.log('User : ', user);
}

init();