const { connectToDB } = require("../utils/mongo");
const prodcuts = require("../models/BigPosters");
async function getSingleItem(req, res) {
	await connectToDB();

	try {
		const gitSingleProduct = await prodcuts.findById(req.params.id);
		return res.status(200).json(gitSingleProduct);
	} catch (error) {
		res.status(401).json(error);
	}
}

module.exports = {
	getSingleItem,
};
