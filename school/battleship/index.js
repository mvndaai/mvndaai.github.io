
window.onload = function() {
    document.getElementById("loginBtn").addEventListener("click", clickLogin ,false);
    document.getElementById("btnJSON").addEventListener("click", getSave, false);
};

function clickLogin(){
    loadAsyncPost();
}

function loadAsyncPost() {
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = "userName=" + name + "&password=" + password;
    var localRequest = new XMLHttpRequest();
    localRequest.open("POST", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php");
    localRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    localRequest.onreadystatechange = function() {
    	if (localRequest.readyState == 4 && localRequest.status == 200) {
            var response =  JSON.parse(localRequest.responseText);
            if(response.result !== "invalid"){
                localStorage.cs2550timestamp=response.userName + " " + response.timestamp;
                window.location = "./game.html";
            }else{
                document.getElementById("loginText").classList.remove("hidden");
                document.getElementById("loginText").innerHTML = "Incorrect username or password";
            }
    	}
    };
    localRequest.send(data);
}

function getSave(){
    var localRequest = new XMLHttpRequest();
    localRequest.open("GET", "./save.json");
    localRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    localRequest.onreadystatechange = function() {
    	if (localRequest.readyState == 4 && localRequest.status == 200) {
            var response =  JSON.parse(localRequest.responseText);
            //console.log(response);
            document.getElementById("displayJSON").innerHTML = "<br>" + JSON.stringify(response);
    	}
    };
    localRequest.send();
}
