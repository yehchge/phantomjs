var page = require('webpage').create();
var url = "http://tw.yahoo.com";
page.open(url, function(status) {
	var title = page.evaluate(function() {
		return document.title;
	});
	console.log('Page title is ' + title);
	phantom.exit();
});
