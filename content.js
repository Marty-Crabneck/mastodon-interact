
chrome.runtime.sendMessage({text: "handle?"}, function(response) {
//	console.log("CONT: Response: '%o'", response);
	let handle= response;
	if (handle.length<=1) {
		console.log("CONT: Handle not set.");
		return;
	}

	let inp= document.getElementById('remote_follow_acct');
	let btn= document.getElementsByName("button");
	if (typeof(inp)=='undefined' || btn.length<1) {
		console.log("CONT: Not a mastodon interact page.");
		return;
	}

	inp.value= handle;
	btn[0].dispatchEvent(new MouseEvent("click", {"view":window, "bubbles":true, "cancelable":false}));
});

//console.log("CONT: popup loaded.");
