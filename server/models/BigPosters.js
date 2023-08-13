const { model, Schema, models } = require(`mongoose`);

const productsScema = new Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	price: {
		type: String,
	},
	images: {
		type: Array,
	},
	sizes: {
		type: Array,
	},
	category: {
		type: String,
	},
});
const product = models.User || model("product", productsScema);

module.exports = product;
