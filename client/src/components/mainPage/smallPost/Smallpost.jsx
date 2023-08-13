import smallPsot from "../../../assets/Decoracion.jpg";
import { useState } from "react";
import Button from "../../UI/Button";
import "../poster/poster.css";
import { Link } from "react-router-dom";
export default function Smallpost() {
	const [isMouseIn, setIsMouseIn] = useState(false);
	return (
		<div className="flex bg-black max-lg:flex-col  max-lg:pb-20">
			<div className="w-[50vw] flex justify-center items-center text-white max-lg:order-1 max-lg:w-full ">
				<div className="flex flex-col gap-5 justify-center items-center">
					<h2 className=" text-4xl"> תמונות קיר</h2>
					<Link to={"/frames"}>
						<Button>קנה עכשיו</Button>
					</Link>
				</div>
			</div>

			<div
				className="overflow-hidden"
				onMouseEnter={() => setIsMouseIn(true)}
				onMouseLeave={() => setIsMouseIn(false)}>
				<img
					className={`w-[50vw] cursor-pointer max-lg:w-full   ${
						isMouseIn && ` scale-110 z-[-1]  `
					} ani z-1 `}
					src={smallPsot}
					alt=""
				/>
			</div>
		</div>
	);
}
