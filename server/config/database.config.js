const mongoose = require("mongoose");
	db = "pets";

mongoose.connect(`mongodb://localhost/${db}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the Pet Shelter database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));