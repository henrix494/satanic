const { model, Schema, models } = require(`mongoose`);

const emailScema = new Schema({
	email: {
		type: String,
	},
});
const emailInfo = models.emailInfoSend || model("emailInfoSend", emailScema);

module.exports = emailInfo;
