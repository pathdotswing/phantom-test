	var webPage = require('webpage');
	var page = webPage.create();

	var rand = Math.floor(Math.random() * 22) + 1;

	page.customHeaders = {
	  "X-Forwarded-For": "192.165.0."+rand
	};

	page.open('http://192.168.0.104:8000/patty/init', function(status) {
	  console.log('Status: ' + status);


	  // Do other things here...
	  // callback(null, status);
	});

	// setInterval(function (){
	// 	page.sendEvent('keypress', page.event.key.A, null, null, 0x02000000 | 0x08000000 );
	// },10000)