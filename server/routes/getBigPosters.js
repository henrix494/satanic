const { connectToDB } = require("../utils/mongo");
const prodcuts = require("../models/BigPosters");
async function getBigPosters(req, res) {
	await connectToDB();

	const allProducts = await prodcuts.find({ category: req.params.item });

	return res.status(200).json(allProducts);
}

module.exports = {
	getBigPosters,
};
