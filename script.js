var bodyElement = document.querySelector(".container-fluid");

function fetchItems(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(request.response);
            const response = request.response.results;
            putUsers(response);
        }
    };
    request.send();
}

function putUsers(response) {
    for (let i = 0; i < response.length; i++) {
        bodyElement.innerHTML += `
                <div class="row">
                        <div class="col-12 col-md-3 image">
                            <img src="${response[i].picture.large}">
                        </div>
                        <div class="col-12 col-md-9 info">
                            <div class="name">${response[i].name.title} ${response[i].name.first} ${response[i].name.last}</div>
                            <div class="phone"><i class="fas fa-phone"></i> ${response[i].phone}</div>
                            <div class="user"><i class="fas fa-user"></i> ${response[i].login.username}</div>
                            <div class="mail"><i class="fas fa-envelope"></i> ${response[i].email}</div>
                            <div class="birthday"><i class="fas fa-birthday-cake"></i> ${response[i].dob.date.substring(8, 10)}-${response[i].dob.date.substring(5, 7)}-${response[i].dob.date.substring(0, 4)}</div>
                            <div class="address"><i class="fas fa-map"></i> ${response[i].location.street.number} ${response[i].location.street.name} , ${response[i].location.city} - ${response[i].location.state}</div>
                        </div>
                    </div>
                `
    }
}

fetchItems('https://randomuser.me/api/?results=8');