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
		type: String,
	},
	street: {
		type: String,
	},
	numOfAprt: {
		type: String,
	},
	phone: {
		type: String,
	},
	cart:{
		type :Array
	},
	totalPay:{
		type:Number
	}
});
const ShippingInfo =
	models.ShippingInfo || model("ShippingInfo", shipInfoSchema);

module.exports = { ShippingInfo };
