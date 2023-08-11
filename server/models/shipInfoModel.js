const { model, Schema, models } = require(`mongoose`);

const shipInfoSchema = new Schema({
	email: {
		type: String,
	},
	name: {
		type: String,
	},
	lastName: {
		type: String,
	},
	city: {
		type: Array,
	},
	street: {
		type: Array,
	},
	numOfAprt: {
		type: String,
	},
	phone: {
		type: String,
	},
});
const ShippingInfo =
	models.ShippingInfo || model("ShippingInfo", shipInfoSchema);

module.exports = { ShippingInfo };
