var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	if (req.isAuthenticated()) {
		console.log(`type: ${req.user.type}`);
		console.log(`User: ${req.user.uid}`);
		console.log(`AUTH: ${req.isAuthenticated()}`);
	} else {
		console.log(`AUTH: ${req.isAuthenticated()}`);
	}
	res.render('home/index', {
		title: "Donate for Humanity"
	});
});

router.get('/contact-us', (req, res) => {
	res.render('home/contact-us');
});


module.exports = router;