window.onload = function () {
    refreshUser();
    document.getElementById("refresh").onclick = refreshUser;
}

function refreshUser() {
    fetchData('https://randomuser.me');
}

async function fetchData(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let element = jsonObj.results[0];
    let firstName = element.name.first;
    let lastName = element.name.last;
    let email = element.email;
    let phone = element.cell;
    let image = element.picture.large;

    document.getElementById("name").innerHTML = firstName+" "+lastName;
    document.getElementById("profileImg").src = image;
}