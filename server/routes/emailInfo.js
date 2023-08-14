const emailInfo = require("../models/emailSend");
const { connectToDB } = require("../utils/mongo");
async function sendEmailInfo(req, res) {
	const { email } = await req.body;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email) {
		return res.status(401).json("נא להזין אמייל");
	}
	if (!emailPattern.test(email)) {
		return res.status(401).json("כתובת האימייל אינה תקינה");
	} else {
		await connectToDB();
		const newCosInfo = new emailInfo({
			email: email,
		});

		await newCosInfo.save();
		return res.status(200).json("נהיה בקשר בקרוב");
	}
}

module.exports = {
	sendEmailInfo,
};
