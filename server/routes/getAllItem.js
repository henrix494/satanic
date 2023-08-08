const { connectToDB } = require("../utils/mongo");
const prodcuts = require("../models/BigPosters");
async function getAllItems(req, res) {
	await connectToDB();

	const allProductsOnDb = await prodcuts.find({});

	return res.status(200).json(allProductsOnDb);
}

module.exports = {
	getAllItems,
};
