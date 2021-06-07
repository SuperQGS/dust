//import world data
var rooms = roomsjson;

//"renders" a room
function openroom(num) { //num = # in array of desired room
    document.getElementById("roomname").innerHTML = rooms[num].title; //grabs room title & 
    
    var descriptions = "";
    for (i = 0; i < rooms[num].desc.length; i++) {
        descriptions += "<p class='type" + rooms[num].desc[i].type + "'>" + rooms[num].desc[i].text + "</p>";
    }
    document.getElementById("paragraphs").innerHTML = descriptions;
    
    var buttons = "";
    for (i = 0; i < rooms[num].buttons.length; i++) {
        
        var renderbutton = true;
        
        if (rooms[num].buttons[i].required_to_see == null) {
            renderbutton = true;
        }
        else if (inventory.includes(rooms[num].buttons[i].required_to_see)) {
            renderbutton = true;
        } else {
            renderbutton = false;
        }
        
        if (renderbutton) {
            buttons += "<input class='option' type='button' onclick='openroom(" + rooms[num].buttons[i].moveto + ")' value='" + rooms[num].buttons[i].name + "'>";
        }
        
    }
    document.getElementById("buttons").innerHTML = buttons;
}

//inventory
var inventory = [];

//dev tools
function devgive(item) {
    if (inventory.length < 50) {
        inventory[inventory.length] = item;
        document.getElementById("inventory").innerHTML += "<img class='item' src='" + item + ".png'>";
    }
}

function take(item) {
    if (inventory.length < 10) {
        inventory[inventory.length] = item;
        document.getElementById("inventory").innerHTML += "<img src='" + item + ".png'>";
    }
}