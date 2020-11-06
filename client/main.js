
var cardList = []

function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}

function getJson() {
    var mainContainer = document.getElementById("myData");
    fetch(url)
        .then(function (response) {
            // The JSON data will arrive here
        })
        .catch(function (err) {
            // If an error occured, you will catch it here
        });
}

function hideCreate() {
    var x = document.getElementById("createDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

async function sendCard() {
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var image = document.getElementById("image").value;
    var description = document.getElementById("description").value;
    myObj = { "name": name, "type": type, "image": image, "description": description };
    console.log(myObj)
    axios.post('http://localhost:5000/create-card', myObj)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function addCardToList(card) {
    $("#Cards")
        .append(`<li>${card.name}</li>
                <li>${card.type}</li>
                <li><img src="${card.image}" width="100" height="100"></li>
                <li>${card.description}</li>
                ----------------------`);
}

async function callCards() {
    response = await axios.get('http://localhost:5000/5cards')
        .then(function (response) {
            // handle success
            for (var i = 0; i < response.data.data.length; i++) {
                addCardToList(response.data.data[i])
                cardList[response.data.data[i].name] = response.data.data[i]
                console.log(response.data.data[i].name)

            }
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
