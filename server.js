var express = require('express'),
	root = __dirname,
	port = process.env.PORT || 8000,
	app = express();

app.use(express.static(root));

app.listen(port, function() {
	console.log(`server running on port ${port}`);
});