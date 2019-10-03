// ///////////////////////////////////
// Show Password On User Interface

document.querySelector('.fa-eye').addEventListener('click', function () {
    var getInput = document.querySelector('.inputData');

    var iconColor = document.querySelector('.fa-eye');

    if (getInput.type === 'password') {
        getInput.type = 'text';
        iconColor.style.color = '#2f2f2f';
    } else {
        getInput.type = 'password';
        iconColor.style.color = '#d3d3d3';
    }
});



// Confirmation of codes
document.querySelector('.submitBtn').addEventListener('click', function () {
    var firstPass, secondPass, checkPass, password;
    password = true;
    firstPass = document.getElementById('pass-0').value;
    secondPass = document.getElementById('pass-1').value;
    checkPass = document.getElementById('Checker');

    if (password) {
        if (firstPass !== secondPass) {
            checkPass.style.opacity = 1;
            password = false;
        } else {
            checkPass.style.opacity = 0;
        }
    }
})



// Tabs
function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}




// Notification 
document.querySelector('.notify').addEventListener('click', function () {
    document.querySelector('.notification').style.display = 'block';
});

// Sidebar 
function openNav() {
    document.getElementById("sideBar").style.marginLeft = "0";
    console.log('I was clicked');
}

function closeNav() {
    document.getElementById("sideBar").style.marginLeft = "-300px";
  }