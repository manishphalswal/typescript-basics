function getUserViaXMLHttpRequest() {

    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", 'https://jsonplaceholder.typicode.com/users/1');
    xmlHttpRequest.send();
    xmlHttpRequest.onload = function() {
        debugger;
        xmlHttpRequest.status === 200
        ? console.log('Got the user via XMLHttpRequest as: ', xmlHttpRequest.response)
        : console.log(`Error ${xmlHttpRequest.status} : ${xmlHttpRequest.statusText}`);
    }

    xmlHttpRequest.onprogress = function(event) {
        debugger;
        const message = event.lengthComputable
        ? `Received ${event.loaded} of ${event.total} bytes`
        : `Received ${event.loaded} bytes`;
        console.log(message);
    }

    xmlHttpRequest.onerror = function() {
        console.log(`Error occured while calling using XMLHttpRequest.`);
    }
}

function getUserViaFetch() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response =>  {
        debugger;
        //console.log(`Response in json via fetch: `, response.json());
        return response.json();
    })
    .then(user => {
        debugger;
        console.log(`Got the user via fetch: `, user);
    });
}