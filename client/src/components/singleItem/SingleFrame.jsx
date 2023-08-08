import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/CartSlice";
import { Link } from "react-router-dom";
export default function SingleFrame() {
	const [currentButton, setCurrentButton] = useState(0);
	const [itemDate, setItemDate] = useState([]);
	const [sizeArray, setSizeArray] = useState([]);
	const [currentSize, setCurrentSize] = useState(`A3`);
	const [price, setPrice] = useState(40);
	const [loading, setLoading] = useState(true);
	const [amount, SetAmount] = useState(1);
	const [randomData, setRandomData] = useState([]);
	const loction = window.location.href;
	const cutUrl = loction.search("64c");

	const fullUrl = loction.slice(cutUrl);
	const dispatch = useDispatch();
	const titleTest = useSelector((state) => state.cart.items);
	const [click, isClick] = useState(1);
	useEffect(() => {
		const callMe = async () => {
			const data = await fetch(
				`https://satanic-omega.vercel.app/item/${fullUrl}`
			);
			const randomData = await fetch(`https://satanic-omega.vercel.app/random`);
			const jsonData = await data.json();
			const randomDataJson = await randomData.json();
			setItemDate(jsonData);
			setSizeArray(jsonData.sizes);
			setRandomData(randomDataJson);
			setLoading(false);
		};

		scrollTo(0, 0);
		callMe();
	}, [click]);
	const changePrice = (e, index) => {
		setCurrentSize(e.target.innerHTML);
		console.log(titleTest);
		setCurrentButton(index);

		switch (true) {
			case index === 0:
				setPrice(40);
				break;
			case index === 1:
				setPrice(60);
				break;
		}
	};
	const newItem = {
		id: itemDate._id,
		title: itemDate.title,
		img: itemDate.images,
		que: amount,
		price: price,
		index: currentButton,
		size: currentSize,
	};

	const addToCart = () => {
		dispatch(addItem(newItem));
	};
	return (
		<>
			<div
				className={`mt-[10%]  ${
					!loading && "flex flex-col items-center justify-center "
				} max-lg:mt-[30%] max-lg:px-5`}>
				{loading ? (
					<Loading />
				) : (
					<div className="flex justify-around w-[80vw] max-lg:w-full">
						<div className="flex gap-40 max-2xl:flex-col max-xl:gap-10 ">
							{" "}
							<div className="text-right max-2xl:order-1">
								{" "}
								<div>
									<p className="text-4xl max-lg:text-2xl font-semibold    ">
										{itemDate.title}
									</p>
									<div className="flex flex-row-reverse items-center gap-2 mt-8">
										{" "}
										<div>
											{" "}
											<p className=" text-2xl">₪{price}</p>
										</div>
										<div>
											{" "}
											<p className="text-2xl ">שקלים חדשים </p>
										</div>
									</div>

									<p className=" mt-7 text-xl">{itemDate.description}</p>
									<p className="mt-5 text-4xl">גדלים</p>
								</div>
								<div className=" flex flex-row-reverse gap-5 mt-5 flex-wrap ">
									{sizeArray.map((item, index) => {
										return (
											<button
												className={` border-2 px-2 py-1 rounded-md ${
													currentButton === index && "border-[black]"
												} `}
												key={index}
												onClick={(e) => changePrice(e, index, item)}>
												{item}
											</button>
										);
									})}
								</div>
								<div className="mt-10 flex flex-row-reverse gap-5 max-lg:flex-col max-lg:items-center">
									<div className=" max-lg:order-2 ">
										<button
											className="bg-black text-white px-28 py-3 hover:opacity-80 transition-all"
											onClick={() => addToCart()}
											disabled={!amount}>
											הוסף לעגלה
										</button>
									</div>{" "}
									<div className="flex max-lg:h-[50px]  ">
										<button
											onClick={() => {
												SetAmount((prev) => prev + 1);
											}}
											className=" h-full text-white bg-black flex  items-center hover:opacity-80 transition-all ">
											<span className="  text-2xl  px-6">+</span>
										</button>
										<div>
											{" "}
											<input
												className="h-full border-2 text-center"
												type="number"
												min={1}
												onChange={(e) => SetAmount(parseInt(e.target.value))}
												value={amount}
											/>
										</div>
										<button
											disabled={amount === 1}
											onClick={() => SetAmount((prev) => prev - 1)}
											className={` h-full text-white bg-black flex  items-center hover:opacity-80 transition-all ${
												amount === 1 && "cursor-not-allowed"
											} `}>
											<span className="  text-2xl px-5">&#8722;</span>
										</button>
									</div>
								</div>
							</div>
							<img
								className={` max-lg:w-full w-[40%]
									`}
								src={itemDate.images}
								alt=""
							/>
						</div>
					</div>
				)}
				<div className="mt-10 font-serif">
					<div className="mb-10">
						<h2 className=" text-6xl font-bold text-center">קנו גם </h2>
					</div>
					<div className="flex  justify-center max-lg:flex-col max-lg:gap-10">
						{randomData.map((item) => {
							console.log(item);
							return (
								<div key={item._id} className="flex justify-center  ">
									<div className="w-[80%]">
										{" "}
										<Link
											onClick={() => isClick((prev) => !prev)}
											to={`/item/${item._id}`}>
											{" "}
											<div>
												<img
													className={`  ${
														item._id === "64ccaa16e70b95472240d0f3" &&
														"w-[50%] self-center"
													}`}
													src={item.images}
													alt=""
												/>
											</div>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
