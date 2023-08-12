const fetch = require("node-fetch");

const { ShippingInfo } = require("../models/shipInfoModel");
const { connectToDB } = require("../utils/mongo");

async function createShipingInfo(req, res) {
	const {
		email,
		name,
		lastName,
		city,
		street,
		numOfAprt,
		phone,
		totalAmount,
		cart,
	} = await req.body;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	
	try {
		if (!email) {
			return res.status(401).json("נא להזין אמייל");
		}
		if (!emailPattern.test(email)) {
			return res.status(401).json("כתובת האימייל אינה תקינה");
		}
	
		if (!name) {
			return res.status(401).json("נא להזין שם ");
		}
		if (!street) {
			return res.status(401).json("נא להזין רחוב");
		}
		if (!phone) {
			return res.status(401).json("נא להזין מספר פאלפון");
		} else {
			await connectToDB();
			const newShipingInfo = new ShippingInfo({
				email: email,
				name: name,
				lastName: lastName,
				city: city,
				street: street,
				numOfAprt: numOfAprt,
				phone: phone,
				cart:cart,
				totalPay:totalAmount

			});

			await newShipingInfo.save();

			try {
				const cartItems = cart.map((item) => ({
					Amount: item.price,
					Currency: "ILS",
					Name: item.title,
					Description: item.des,
					Quantity: item.que,
					Image: item.img[0], // Assuming img is an array, use the first URL
					IsTaxFree: "false",
					AdjustAmount: "false",
				}));

				const requestBody = {
					Key: process.env.zcredit,
					Local: "He",
					UniqueId: "",
					SuccessUrl: "https://www.kapit-coffee.com/",
					CancelUrl: "",
					CallbackUrl: "",
					PaymentType: "regular",
					CreateInvoice: "false",
					AdditionalText: "",
					ShowCart: "true",
					ThemeColor: "005ebb",
					BitButtonEnabled: "true",
					ApplePayButtonEnabled: "true",
					GooglePayButtonEnabled: "true",
					Installments: {
						Type: "regular",
						MinQuantity: "1",
						MaxQuantity: "12",
					},
					Customer: {
						Email: email,
						Name: name,
						PhoneNumber: phone,
						HolderId: "",
						Attributes: {
							HolderId: "required",
							Name: "required",
							PhoneNumber: "required",
							Email: email,
						},
					},
					CartItems: cartItems,
					FocusType: "None",
					CardsIcons: {
						ShowVisaIcon: "true",
						ShowMastercardIcon: "true",
						ShowDinersIcon: "true",
						ShowAmericanExpressIcon: "true",
						ShowIsracardIcon: "true",
					},
					IssuerWhiteList: [1, 2, 3, 4, 5, 6],
					BrandWhiteList: [1, 2, 3, 4, 5, 6],
					UseLightMode: "false",
					UseCustomCSS: "false",
					BackgroundColor: "FFFFFF",
					ShowTotalSumInPayButton: "true",
					ForceCaptcha: "false",
				};

				const zCreditResponse = await fetch(
					"https://pci.zcredit.co.il/webcheckout/api/WebCheckout/CreateSession/",
					{
						method: "POST",
						headers: { "Content-Type": "application/json " },
						body: JSON.stringify(requestBody),
					}
				);

				const zCreditData = await zCreditResponse.json();
				res.status(200).json(zCreditData);
			} catch (error) {
				res.status(500).json(error);
			}
		}
	} catch (error) {
		res.status(500).json(error);
	}
}

module.exports = {
	createShipingInfo,
};
