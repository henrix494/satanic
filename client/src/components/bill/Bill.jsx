import { useSelector } from "react-redux";
export default function Bill() {
	const cartData = useSelector((state) => state.cart.items);
	const totalAmount = cartData.reduce((total, item) => {
		return total + item.price * item.que;
	}, 0);
	const postHandler = async () => {
		const data = await fetch("https://satanic-omega.vercel.app/payNow", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});

		if (data.status === 401) {
			const resData = await data.json();
			console.log(resData);
		}
		if (data.status === 200) {
			const resData = await data.json();

			console.log(resData);
			window.open(data.sessionUrl.Data.SessionUrl);
		}
	};
	return (
		<div className="flex justify-center mb-20 ">
			<div className="flex mt-40 max-lg:flex-col ">
				<div className=" border-r-2  pr-10 max-lg:px-10 w-[30vw] max-lg:w-full max-lg:order-2">
					<form
						onSubmit={() => postHandler}
						className="flex flex-col text-right gap-6">
						<label className="text-3xl font-bold" htmlFor="email">
							אמייל
						</label>
						<input
							className="border-2 h-[40px] text-right"
							type="text"
							name="email"
							id="email"
						/>{" "}
						<h3 className="text-3xl font-bold">משלוח</h3>
						<div className="flex flex-row-reverse  text-right gap-2">
							<input
								className="border-2 h-[40px] w-1/2 placeholder:text-right"
								type="text"
								name="name"
								id="name"
								placeholder="שם"
							/>
							<input
								className="border-2 h-[40px]  w-1/2 placeholder:text-right"
								type="text"
								name="lastName"
								id="lastName"
								placeholder=" שם משפחה"
							/>
						</div>{" "}
						<div className="  text-right gap-2">
							<input
								className="border-2 h-[40px] w-full placeholder:text-right"
								type="text"
								name="adress"
								id="adress"
								placeholder="כתובת"
							/>
						</div>
						<div className="flex  text-right gap-2">
							<input
								className="border-2 h-[40px] w-full placeholder:text-right"
								type="text"
								name="city"
								id="city"
								placeholder="מספר בית"
							/>{" "}
							<input
								className="border-2 h-[40px] w-full placeholder:text-right"
								type="text"
								name="adress"
								id="adress"
								placeholder="רחוב"
							/>{" "}
							<input
								className="border-2 h-[40px] w-full placeholder:text-right"
								type="text"
								name="adress"
								id="adress"
								placeholder="עיר"
							/>
						</div>{" "}
						<div className="  text-right gap-2">
							<input
								className="border-2 h-[40px] w-full placeholder:text-right"
								type="text"
								name="adress"
								id="adress"
								placeholder="מספר פאלפון"
							/>
						</div>
						<div className=" bg-black text-white py-2 mt-4  text-center cursor-pointer hover:opacity-80 transition-all">
							<button>המשך לתשלום</button>
						</div>
					</form>{" "}
				</div>
				<div className=" ml-5 max-lg:ml-0 max-lg:px-5 w-[30vw] max-lg:w-full flex flex-col gap-10 ">
					{cartData.map((item) => {
						return (
							<div key={item._id} className="px-2 flex relative items-center ">
								<div className="w-[20%]">
									{" "}
									<img
										className="w-[65%] max-lg:w-[80%]"
										src={item.img}
										alt=""
									/>
								</div>{" "}
								<div>
									{" "}
									<div className="   ">{item.title}</div>
									<div className="   ">{item.size}</div>
									<p className=""> סך הכל {item.price * item.que} שקל</p>
								</div>
								<div className=" absolute max-lg:left-0 left-16 top-[-15px] bg-[#F5F5F5] rounded-full px-3 py-2  ">
									{item.que}
								</div>{" "}
							</div>
						);
					})}
					<div className=" mt-10 text-2xl">
						<div className="flex justify-between">
							<div className="flex gap-1">
								{" "}
								<p className="font-bold"> ₪{totalAmount} </p>
							</div>
							<p>:לתשלום</p>
						</div>

						<p className="text-sm mt-10">
							ביטול עסקה בהתאם לתקנות הגנת הצרכן (ביטול עסקה), התשע"א-2010 וחוק
							הגנת הצרכן, התשמ"א-1981
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
