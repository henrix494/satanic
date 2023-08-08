const mongoose = require(`mongoose`);

async function connectToDB() {
	mongoose.set("strictQuery", true);
	try {
		const test = await mongoose.connect(
			process.env.MONGODB,

			{
				dbName: "satanic",

				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		console.log("MongoDB connected");
		return test;
	} catch (error) {
		console.log(error);
	}
}

module.exports = { connectToDB };
