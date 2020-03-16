var personData = [];
var jsDOM = {
    data: {
        fname: document.getElementById('firstName'),
        lname: document.getElementById('lastName'),
        email: document.getElementById('email'),
        phone: document.getElementById('phoneNumber'),
        city: document.getElementById('city')
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
};
var jsFunc = {
    myFunction: function () {
        jsDOM.fnameOutput.innerHTML = "First Name: " + jsDOM.fname.value;
        jsDOM.lnameOutput.innerHTML = "Last Name: " + jsDOM.lname.value;
        jsDOM.emailOutput.innerHTML = "Email: " + jsDOM.email.value;
        jsDOM.phoneOutput.innerHTML = "Phone: " + jsDOM.phone.value;
        jsDOM.cityOutput.innerHTML = "City: " + jsDOM.city.value;
    },
    showData: function () {
        var parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';
        var node = document.createElement("div");
        var nodeHeader = document.createElement("h3");
        var nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);
        var fullname, email, phone, city;
        personData.forEach(function (x) {
            fullname = x.firstname + " " + x.lastname, email = x.email, phone = x.phone, city = x.city;
            var br = document.createElement("br");
            var personData = document.createElement('p');
            var personDataText = document.createTextNode("Full Name: " + fullname);
            personData.appendChild(personDataText);
            node.appendChild(personData);
            personData = document.createElement('p');
            personDataText = document.createTextNode("Email: " + email);
            personData.appendChild(personDataText);
            node.appendChild(personData);
            personData = document.createElement('p');
            personDataText = document.createTextNode("Phone Number: " + phone);
            personData.appendChild(personDataText);
            node.appendChild(personData);
            personData = document.createElement('p');
            personDataText = document.createTextNode("City: " + city);
            personData.appendChild(personDataText);
            node.appendChild(personData);
            node.appendChild(br);
        });
        parentDiv.appendChild(node);
    },
    clearFields: function () {
        jsDOM.data.fname.value = "";
        jsDOM.data.lname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.phone.value = "";
        jsDOM.data.city.value = "";
    },
    addData: function () {
        if (document.getElementById('firstName').value === "" || document.getElementById('lastName').value === "" || document.getElementById('email').value === "" || document.getElementById('phoneNumber').value === "" || document.getElementById('city').value === "") {
            alert('Please fill in the missing fields');
        }
        else {
            personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value, phone: jsDOM.data.phone.value, city: jsDOM.data.city.value });
            jsFunc.clearFields();
        }
    }
};
jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);
