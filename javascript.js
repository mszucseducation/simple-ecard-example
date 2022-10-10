var data = '{"title": "Marry Christmas", "firstName": "santa","lastName": "claus","address": {"streetAddress": "123 Street","city": "North Pole"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';

var json = JSON.parse(data);
var nameFirst = nameFormatting(json.firstName);
var nameLast = nameFormatting(json.lastName);

var pointsIncrement = 0;
			
alert(json["title"]); //mkyong
console.log(json.firstName); //mkyong
console.log(json.address.streetAddress); //88 8nd Street
console.log(json["address"].city); //New York	
console.log(json.phoneNumber[0].number); //111 111-1111
console.log(json.phoneNumber[1].type); //fax	


/**
 * @desc to format the name with the first letter uppercase
 * @param {*} name the name of the person
 * @returns the formatted name
 */
function nameFormatting(name) {
    return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
}

/**
 * @desc a button that shows the image of the present and disables blocks as needed
 */
function delivering() {
    document.getElementById("delivering").disabled = true;
    document.getElementById("atHome").disabled = false;
    document.getElementById("presentImage").style.display = "block";
    document.getElementById("presentImage").src="images/closed-present.png";
    incrementing()
}

/**
 * @desc a button that shows the image of the present and disables blocks as needed
 */
function atHome() {
    document.getElementById("delivering").disabled = false;
    document.getElementById("atHome").disabled = true;
    document.getElementById("presentImage").style.display = "block";
    document.getElementById("presentImage").src="images/open-present.png";
    incrementing()
}

/**
 * @desc increments the number
 */
function incrementing() {
    pointsIncrement++;
    checkIncrementedValue()
}

/**
 * @desc checks the incremented value then reloads page
 */
function checkIncrementedValue() {
    if(pointsIncrement > 5) {
        alert("Have a good day");
        location.reload();
    }
}


document.getElementById("personName").innerHTML = nameFirst + " " + nameLast;
document.getElementById("title").innerHTML = json.title;