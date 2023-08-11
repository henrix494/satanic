const { connectToDB } = require("../utils/mongo");
const prodcuts = require("../models/BigPosters");
async function getAllItems(req, res) {
	await connectToDB();
	try {
		const allProductsOnDb = await prodcuts.find({});
		return res.status(200).json(allProductsOnDb);
	} catch (error) {
		res.status(401).json(error);
	}
}

module.exports = {
	getAllItems,
};
