import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/CartSlice";
import { Link, useLocation } from "react-router-dom";
export default function SingleItem() {
	const [currentButton, setCurrentButton] = useState(0);
	const [itemDate, setItemDate] = useState([]);
	const [sizeArray, setSizeArray] = useState([]);
	const [currentSize, setCurrentSize] = useState(`100x75 ס"מ`);
	const [price, setPrice] = useState(30);
	const [highPrice, setHighPrice] = useState(40);
	const [loading, setLoading] = useState(true);
	const [amount, SetAmount] = useState(1);
	const [randomData, setRandomData] = useState([]);
	const location = useLocation();
	const pathnameParts = location.pathname.split("/");
	const itemId = pathnameParts[pathnameParts.length - 1];

	const dispatch = useDispatch();
	const [click, isClick] = useState(1);
	useEffect(() => {
		const callMe = async () => {
			setLoading(true);

			const data = await fetch(
				`https://satanic-omega.vercel.app/item/${itemId}`
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
	console.log(itemId);

	const changePrice = (e, index) => {
		setCurrentSize(e.target.innerHTML);
		setCurrentButton(index);
		if (
			itemDate._id === "64cceb88690de501437f2475" ||
			itemDate._id === "64ccee95690de501437f2477"
		) {
			switch (true) {
				case index === 0:
					setHighPrice(40);
					break;
				case index === 1:
					setHighPrice(50);
					break;
				case index === 2:
					setHighPrice(60);
					break;
				case index === 3:
					setHighPrice(75);
					break;
				case index === 4:
					setHighPrice(85);
					break;
				case index === 5:
					setHighPrice(95);
					break;
				case index === 6:
					setHighPrice(110);
					break;
			}
		} else {
			switch (true) {
				case index === 0:
					setPrice(30);
					break;
				case index === 1:
					setPrice(40);
					break;
				case index === 2:
					setPrice(50);
					break;
				case index === 3:
					setPrice(70);
					break;
				case index === 4:
					setPrice(80);
					break;
				case index === 5:
					setPrice(85);
					break;
				case index === 6:
					setPrice(100);
					break;
			}
		}
	};
	const newItem = {
		id: itemDate._id,
		title: itemDate.title,
		img: itemDate.images,
		des:itemDate.description,
		que: amount,
		price:
			itemDate._id === "64cceb88690de501437f2475" ||
			itemDate._id === "64ccee95690de501437f2477"
				? highPrice
				: price,
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
						<div className="flex gap-40 max-lg:flex-col max-lg:gap-10 ">
							{" "}
							<div className="text-right max-lg:order-1">
								{" "}
								<div>
									<p className="text-4xl max-lg:text-2xl font-semibold    ">
										{itemDate.title}
									</p>
									<div className="flex flex-row-reverse items-center gap-2 mt-8">
										{" "}
										<div>
											{" "}
											<p className=" text-2xl">
												₪
												{itemDate._id === "64cceb88690de501437f2475" ||
												itemDate._id === "64ccee95690de501437f2477"
													? highPrice
													: price}
											</p>
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
								className={` w-[40%] max-lg:w-full ${
									itemDate._id === "64ccaa16e70b95472240d0f3" && "w-[40%]"
								} `}
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
							return (
								<div key={item._id} className="flex justify-center  ">
									<div className="w-[80%]">
										{" "}
										<Link
											onClick={() => isClick((prev) => !prev)}
											to={
												(item.category === "big_posters" &&
													`/item/${item._id}`) ||
												(item.category === "frames" && `/frame/${item._id}`) ||
												(item.category === "man_shirt" &&
													`/man_shirt_s/${item._id}`) ||
												(item.category === "woman_shirt" &&
													`/SingleWomanShirts/${item._id}`)
											}>
											{" "}
											<div>
												<img
													className={`${
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
