var bot = new cleverbot("d6KtnvVdOrpC0YOS", "LDlghx64ikzb2iFWdbhYn5Oe02rQnST3");
bot.create(function (err, "VTmllFYBAaU71Zjq") {
	function queryBot() {
		var query = document.getElementById('query').value
		bot.ask("Just a small town girl", function (err, response) {
  document.getElementById("responseArea").innerHTML=response;
});
	}
});
