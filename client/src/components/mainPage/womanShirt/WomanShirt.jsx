import smallPsot from "../../../assets/womanshirt.jpg";
import { useState } from "react";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import "../poster/poster.css";
export default function WomanShirt() {
	const [isMouseIn, setIsMouseIn] = useState(false);
	return (
		<div className="flex bg-black max-lg:flex-col ">
			<div className="w-[50vw] flex justify-center items-center text-white max-lg:order-1 max-lg:w-full  max-lg:pt-7 max-lg:border-b-2 max-lg:pb-5">
				<div className="flex flex-col gap-5 justify-center items-center">
					<h2 className=" text-4xl"> חולצות נשים</h2>
					<Link to={"/woman_shirts"}>
						<Button>קנה עכשיו</Button>
					</Link>
				</div>
			</div>

			<div
				className="overflow-hidden"
				onMouseEnter={() => setIsMouseIn(true)}
				onMouseLeave={() => setIsMouseIn(false)}>
				<img
					className={`w-[50vw] cursor-pointer max-lg:w-full  ${
						isMouseIn && ` scale-110 z-[-1]  `
					} ani z-1 `}
					src={smallPsot}
					alt=""
				/>
			</div>
		</div>
	);
}
