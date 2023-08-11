const { connectToDB } = require("../utils/mongo");
const prodcuts = require("../models/BigPosters");
async function getRandom(req, res) {
	await connectToDB();

	try {
		const randomProduct = await prodcuts.aggregate([{ $sample: { size: 4 } }]);

		return res.status(200).json(randomProduct);
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	getRandom,
};
