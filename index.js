function checkform() {
    var f = document.forms["inputForm"].getElementsByTagName("input");
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        console.log(f[i].value);
        if (f[i].value.length === 0)
            cansubmit = false;
    }

    document.getElementById('submitbutton').disabled = !cansubmit;
}

function formHandler(event) {

    event.preventDefault();

    var allAge = document.getElementsByClassName("age");
    var displayText;
    var ageSum = 0;
    var count = 0;
    var flag=false;
    var color;

    for(var i=0; i<allAge.length; i++) {
        if(isNaN(allAge[i].value)===false) {
            ageSum += parseInt(allAge[i].value);
            count+=1;
            flag=true;
        }
        else {
            flag=false;
        }
    }

    switch(flag) {

        case true:
            var average = ageSum/count;
    
            if(average<18) {
                displayText = "Minor";
                color = "pink";
            }
            else if(average>17 && average<45) {
                displayText = "Adults";
                color = "blue";
            }
            else if(average>45 && average<65) {
                displayText = "Middle Aged";
                color = "green";
            }
            else {
                displayText = "Senior Citizen";
                color = "yellow";
            }
            break;

        case false:
            displayText = "Please Enter a valid number";
            color = "red";
            break;
    }
    
    document.getElementById("result").innerHTML = `<h3>Average : ${average.toFixed(2)}, ${displayText}</h3>`;
    document.getElementById("result").style.color = color;
}

var counter = 1;
function addFields() {

    var newFields = '<div class="form-group"><label for="age">Age</label><input type="text" class="form-control age" placeholder="Enter age" onkeyup="checkform()" ></div>';
    var newFieldDiv = document.createElement('div');
    newFieldDiv.innerHTML = newFields;

    document.getElementById("numberOfRows").innerHTML = `<h4>Number of Rows : ${counter + 1}</h4>`;
    document.getElementById("extraFields").appendChild(newFieldDiv);
    counter++;
    
}
