// This function disables the submit until all the form inputs are filled
function checkform() {
    var formElements = document.forms["inputForm"].getElementsByTagName("input");
    var cansubmit = true;
    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].value.length === 0)
            cansubmit = false;
    }
    document.getElementById('submitbutton').disabled = !cansubmit;
}


// This function is used to add extra fields
var counter = 1;
function addFields() {
    var newFields = `<h4 id="person">Person : ${counter + 1}</h4><div class="form-group"><label for="name">Name</label><br><input type="text" class="form-control" placeholder="Enter name" id="name" onkeyup="checkform()" /></div><div class="form-group"><label for="age">Age</label><br><input type="text" class="form-control age" placeholder="Enter age" onkeyup="checkform()" ><span id="${counter + 1}"></span></div><br>`;
    var newFieldDiv = document.createElement('div');
    newFieldDiv.innerHTML = newFields;
    document.getElementById("extraFields").appendChild(newFieldDiv);
    counter++;
}

var categories = {"Minor":0, "Adults":0, "Middle aged":0, "Senior citizen":0};
// This function calculates the average and prints the category
function formHandler(event) {
    event.preventDefault();

    var allAge = document.getElementsByClassName("age");
    var ageSum = 0, count = 0, flag=false, temp="";

    for(var i=0; i<allAge.length; i++) {
        if(isNaN(allAge[i].value)===false) {
            ageSum += parseInt(allAge[i].value);
            count+=1;
            var arr = categorizeAge(allAge[i].value);
            document.getElementById(i+1).innerHTML = `<h4>${arr[0]}</h4>`;
            document.getElementById(i+1).style.color = arr[1];
        }
        else {
            document.getElementById(i+1).innerHTML = "This is not valid";
            document.getElementById(i+1).style.color = "red";
        }
    }
    var average = ageSum/count;
    average = average.toFixed(2);

    document.getElementById("result").innerHTML = `<h3>Average : ${average}</h3>`;
    document.getElementById("result").style.color = arr[1];

    for(var key of Object.keys(categories)) {
        temp += "<h4>" + key + " " + categories[key] + "</h4><br>";
    }
    document.getElementById("category").innerHTML = temp;
}


// This function categories the age
function categorizeAge(age) {
    var displayText, color;
    if(age<18) {
        displayText = "Minor";
        color = "pink";
        categories["Minor"] += 1;
    }
    else if(age>17 && age<45) {
        displayText = "Adults";
        color = "blue";
        categories["Adults"] += 1;
    }
    else if(age>44 && age<65) {
        displayText = "Middle Aged";
        color = "green";
        categories["Middle aged"] += 1;
    }
    else if(age>64){
        displayText = "Senior Citizen";
        color = "yellow";
        categories["Senior citizen"] += 1;
    }
    else {
        displayText = "Please Enter a valid number";
        color = "red";
    }
    return [displayText, color];
}


