
var handle;

// Message from other scripts
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//	console.log("BG Received '%o' from '%o' %o", msg.text, sender.tab, sender.frameId);
	let resp= '?';

	if (msg.text.match(/^handle=/)) {
		handle= msg.text.replace(/^[a-z]+=/, '');
		chrome.storage.sync.set({ handle });
		resp= 'ok';
	}
	else if (msg.text.match(/^handle\?/)) {
		resp= handle;
	}

//	console.log('BG Response: "' + resp + "'");
	sendResponse(resp);
});

// Extension icon clicked
chrome.action.onClicked.addListener((tab) => {
	let dom= handle.match(/[^@]+$/);
	let url= 'https://' + dom + '/web/home';
//	console.log("BG: icon clicked. handle:'%o' domain:'%o' 'url:'%o'", handle, dom, url);
	chrome.tabs.update({url: url});
});

chrome.storage.sync.get("handle", (data) => {
	handle= typeof(data.handle)=='undefined' ? '' : data.handle;
//	console.log("BG: init. handle: '%o'", handle);
});
