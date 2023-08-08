import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import menu from "../../assets/menu.svg";
export default function Navbar() {
	const cartItems = useSelector((state) => state.cart.items);
	const totalQuantity = cartItems.reduce((total, item) => total + item.que, 0);
	const [isHam, setIsHam] = useState(false);
	return (
		<>
			<nav className="bg-[#0E1213] h-[100px] text-[white] flex items-center justify-around px-40 w-screen z-[99999999] fixed top-0 max-xl:hidden">
				<div className="flex gap-10 text-2xl">
					<Link to={"/"} className=" hover:opacity-80 transition-all">
						{" "}
						<h4>בית</h4>
					</Link>
					<Link className=" hover:opacity-80 transition-all" to={"/all_items"}>
						<h4>הכל</h4>
					</Link>

					<Link className=" hover:opacity-80 transition-all" to={"/frames"}>
						<h4>תמונות קיר</h4>
					</Link>
					<Link className=" hover:opacity-80 transition-all" to={"/bigPosters"}>
						<h4>פוסרים</h4>
					</Link>
				</div>
				<div>
					<Link className=" hover:opacity-80 transition-all" to={"/"}>
						{" "}
						<h2 className="text-[white] font-[p22-spooky,sans-serif] text-5xl">
							Satanic
						</h2>
					</Link>
				</div>
				<div>
					{" "}
					<div className="flex gap-10 text-2xl self-end items-center">
						<Link
							className=" hover:opacity-80 transition-all"
							to={"/man_shirts"}>
							<h4>גברים</h4>
						</Link>
						<Link
							className=" hover:opacity-80 transition-all"
							to={"/woman_shirts"}>
							<h4>נשים</h4>
						</Link>

						<img className="w-7 cursor-pointer" src={heart} alt="" />

						<Link to={"/cart"}>
							<div className=" relative">
								<img className="w-5 cursor-pointer" src={cart} alt="" />{" "}
								<div className="absolute top-[-10px] right-[-10px] text-sm">
									<p> {totalQuantity > 0 && <p>{totalQuantity}</p>} </p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</nav>
			<nav className="bg-[#0E1213] h-[100px] text-[white] flex items-center  justify-evenly   w-screen z-[99999999] fixed top-0 xl:hidden ">
				<div className="flex gap-5  items-center ">
					{" "}
					<div className=" ">
						<img
							onClick={() => setIsHam((prev) => !prev)}
							className="w-[30px]"
							src={menu}
							alt=""
						/>
						<div
							className={`w-[80vw] absolute left-0 top-[100%] bg-[white] h-[100vh]  transition-all ${
								isHam ? "translate-x-0 " : "translate-x-[-100%]"
							}`}>
							<div className="text-black text-right px-10 z-40">
								{" "}
								<div className="flex gap-10 text-2xl flex-col mt-10 font-mono font-bold">
									<Link to={"/"} className=" border-b-2 border-black pb-2">
										{" "}
										<h4>בית</h4>
									</Link>

									<Link
										className=" border-b-2 border-black pb-2"
										to={"/all_items"}>
										<h4>הכל</h4>
									</Link>

									<Link
										className=" border-b-2 border-black pb-2"
										to={"/frames"}>
										<h4>תמונות קיר</h4>
									</Link>
									<Link
										className=" border-b-2 border-black pb-2"
										to={"/bigPosters"}>
										<h4>פוסרים</h4>
									</Link>

									<Link
										className=" border-b-2 border-black pb-2"
										to={"/man_shirts"}>
										<h4>גברים</h4>
									</Link>
									<Link
										className=" border-b-2 border-black pb-2"
										to={"/woman_shirts"}>
										<h4>נשים</h4>
									</Link>
									<img className="w-7 cursor-pointer" src={heart} alt="" />
									<Link to={"/cart"}>
										<div className=" relative">
											<img className="w-5 cursor-pointer" src={cart} alt="" />{" "}
											<div className="absolute top-[-10px] right-[-10px] text-sm">
												<p> {totalQuantity > 0 && <p>{totalQuantity}</p>} </p>
											</div>
										</div>
									</Link>
								</div>{" "}
								<Link to={"/"}>
									{" "}
									<h2 className="text-[black] text-center w-full font-[p22-spooky,sans-serif] text-5xl">
										Satanic
									</h2>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div>
					<Link to={"/"}>
						{" "}
						<h2 className="text-[white] font-[p22-spooky,sans-serif] text-5xl">
							Satanic
						</h2>
					</Link>
				</div>

				<Link to={"/cart"}>
					<div className=" relative">
						<img className="w-5 cursor-pointer" src={cart} alt="" />{" "}
						<div className="absolute top-[-10px] right-[-10px] text-sm">
							<p> {totalQuantity > 0 && <p>{totalQuantity}</p>} </p>
						</div>
					</div>
				</Link>
			</nav>
		</>
	);
}
