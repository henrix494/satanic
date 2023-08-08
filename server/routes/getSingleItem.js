const { connectToDB } = require("../utils/mongo");
const prodcuts = require("../models/BigPosters");
async function getSingleItem(req, res) {
	await connectToDB();
	const gitSingleProduct = await prodcuts.findById(req.params.id);
	return res.status(200).json(gitSingleProduct);
}

module.exports = {
	getSingleItem,
};
