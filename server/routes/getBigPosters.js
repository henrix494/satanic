const { connectToDB } = require("../utils/mongo");
const prodcuts = require("../models/BigPosters");
async function getBigPosters(req, res) {
	await connectToDB();

	try {
		const allProducts = await prodcuts.find({ category: req.params.item });

		return res.status(200).json(allProducts);
	} catch (error) {
		res.status(401).json(error);
	}
}

module.exports = {
	getBigPosters,
};
