var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// create friend
	var name = req.query.name;
	var des = req.query.description;
	var img = 'http://lorempixel.com/400/400/people';
	var newFriend = {'name' : name,
				  'description' : des,
				  'imageURL' : img};
	console.log(newFriend);

	data['friends'].push(newFriend);
	res.render('add');
}