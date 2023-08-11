import img from "../../assets/Decoracion.jpg";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../features/CartSlice";
import { Link } from "react-router-dom";
export default function Cart() {
	const titleTest = useSelector((state) => state.cart.items);
	console.log(titleTest);
	const dispatch = useDispatch();
	const totalAmount = titleTest.reduce((total, item) => {
		return total + item.price * item.que;
	}, 0);
	return (
		<div
			className={` mt-40 flex  flex-col items-end text-right max-lg:w-full max-lg:px-4 mb-10 ${
				titleTest.length === 0 ? "w-full " : "w-[80vw]"
			} `}>
			<div className=" relative">
				{" "}
				<p className="text-6xl">סל הקניות</p>
				<div className=" absolute w-[70%] top-24 bg-black h-1 right-0 "></div>
			</div>
			{titleTest.length === 0 ? (
				<div className=" flex justify-center max-lg:justify-end mt-20   w-screen">
					{" "}
					<div className="flex flex-col gap-5 ">
						<p className=" text-4xl max-lg:text-2xl font-bold">
							עדיין לא הוספת פרטים לסל{" "}
						</p>
						<Link to={"/"}>
							{" "}
							<p className="text-center text-2xl max-lg:text-right">
								המשך קניות
							</p>
						</Link>
					</div>
				</div>
			) : (
				<>
					{" "}
					<div className="mt-[10%] border-b-2 w-[70vw] pb-5 max-lg:hidden ">
						<div className=" flex justify-around  text-2xl max-lg:text-xl">
							{" "}
							<div className="flex-[0.8]">
								{" "}
								<p className="">סך הכל</p>
							</div>{" "}
							<div className="flex-[0.8]">
								{" "}
								<p className="">כמות</p>
							</div>
							<div className="flex-[0.8]">
								<p>מחיר</p>
							</div>
							<div className="flex-[1.5] text-right">
								{" "}
								<p className="">מוצרים</p>
							</div>{" "}
						</div>
					</div>{" "}
					<div className="flex  w-[70vw] mt-10 relative max-lg:hidden flex-col   ">
						{titleTest.map((item) => {
							return (
								<div
									key={item.id}
									className=" flex justify-around items-center   text-xl max-lg:text-xl border-b-2 pb-10 relative gap-10">
									{" "}
									<div className="flex-[0.8] max-lg:flex-1">
										{" "}
										<p className="">{item.price * item.que}</p>
									</div>{" "}
									<div className="   flex-[0.8]   max-lg:flex-1 ">
										{" "}
										<p>{item.que}</p>
									</div>
									<div className="flex-[0.8] max-lg:flex-1">
										<p>{item.price}</p>
									</div>
									<div className="flex-[1.5]   flex flex-row-reverse gap-6">
										{" "}
										<img src={item.img} className="w-[30%]"></img>
										<div className="text-right flex flex-col gap-8 ">
											{" "}
											<p className="text-2xl max-lg:text-xl">{item.title}</p>
											<p className="text-2xl max-lg:text-xl"> {item.size}</p>
										</div>
									</div>{" "}
									<div
										className=" absolute left-0 top-[-30px] cursor-pointer hover:text-[red]"
										onClick={() => dispatch(removeItem(item))}>
										X
									</div>
								</div>
							);
						})}{" "}
						<div className="flex flex-col gap-4">
							<div className="bg-[#F2F2F2] w-full h-[50px] flex flex-row-reverse items-center text-2xl font-bold ">
								{" "}
								<div className="flex gap-2">
									<p>שקלים</p>
									<p>{totalAmount}</p>

									<p>סך הכל</p>
								</div>
							</div>
							<div>
								<Link to={"/bill"}>
									<button
										className={` border-2 px-20 py-2 bg-black text-white hover:opacity-80 transition-all ${
											titleTest.length === 0 && "hidden"
										}`}>
										צ`ק אאוט
									</button>
								</Link>
							</div>
							<div>
								<p className=" text-xl text-[red]">המשך בקניות</p>
							</div>
						</div>
					</div>{" "}
				</>
			)}

			<div className="lg:hidden flex flex-col gap-0 mt-10 ">
				{titleTest.map((item) => {
					return (
						<div key={item._id} className=" mt-10   relative   ">
							<div className="  flex flex-row-reverse  ">
								<div className=" flex flex-row-reverse gap-4">
									{" "}
									<img src={item.img} className=" w-[50%]"></img>
									<div className="">
										{" "}
										<p className="text-2xl"> {item.title} </p>
										<p className="text-lg"> {item.size} </p>
										<p>
											{item.price} X {item.que}
										</p>
										<p>סך הכל :{item.price * item.que}</p>
									</div>
								</div>
								<div
									className=" absolute left-0 top-[-30px] cursor-pointer hover:text-[red]"
									onClick={() => dispatch(removeItem(item))}>
									X
								</div>
							</div>{" "}
						</div>
					);
				})}{" "}
				<div
					className={`bg-[#F2F2F2] w-full h-[50px] flex flex-row-reverse items-center text-2xl font-bold mt-5 ${
						titleTest.length === 0 ? " hidden " : "block"
					} `}>
					{" "}
					<div className="flex gap-2">
						<p>שקלים</p>
						<p>{totalAmount}</p>

						<p>סך הכל</p>
					</div>
				</div>
				<div className="mt-10">
					<Link to={"/bill"}>
						<button
							className={` border-2 px-20 py-2 bg-black text-white ${
								titleTest.length === 0 && "hidden"
							} `}>
							צ`ק אאוט
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
