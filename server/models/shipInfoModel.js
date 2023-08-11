const { model, Schema, models } = require(`mongoose`);

const shipInfoSchema = new Schema({
	email: {
		type: String,
		required: [true, "אימייל זה שדה חובה"],
	},
	name: {
		type: String,
		required: [true, "שם זה שדה חובה"],
	},
	lastName: {
		type: String,
	},
	city: {
		type: Array,
		required: [true, " עיר זה שדה חובה"],
	},
	street: {
		type: Array,
	},
	numOfAprt: {
		type: String,
	},
	phone: {
		type: String,
		required: [true, " מספר זה שדה חובה  "],
	},
});
const shipInfo = models.shipInfo || model("shipInfo", shipInfoSchema);

module.exports = shipInfo;
