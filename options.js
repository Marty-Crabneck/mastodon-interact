
let input= document.getElementById("handle");
let button= document.getElementById("set");

// Reacts to a button click
function btn_click (event) {
	let handle= input.value;
	chrome.runtime.sendMessage({text: "handle=" + handle}, function(response) {
//		console.log("OPT: btn_click() Response: '%o'", response);
	});
}

// Initialize the page by retrieving handle from background.js
function construct_opt () {
	chrome.runtime.sendMessage({text: "handle?"}, function(response) {
		console.log("OPT: init. Response: '%o'", response);
		input.value= response;
	});

	button.addEventListener("click", btn_click);
}

construct_opt();
