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
const shipInfo = models.shipInfo || model("shipInfo", shipInfoSchema);

module.exports = shipInfo;
