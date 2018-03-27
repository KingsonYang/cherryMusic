
function changeLoginbtn() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if (username != "" && password != "") {
		document.getElementById('loginbtn').removeAttribute("class");
		document.getElementById('loginbtn').setAttribute("class","btn-current-big btn-default-main");

	}else{
		document.getElementById('loginbtn').removeAttribute("class");
		document.getElementById('loginbtn').removeAttribute("disabled");
		document.getElementById('loginbtn').setAttribute("class","btn-current-big btn-disabled");
	}
}
