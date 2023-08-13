import { useState } from "react";
import posterIMG from "../../../assets/manShirt.jpg";
import Button from "../../UI/Button";
import "../poster/poster.css";
import { Link } from "react-router-dom";
export default function ManShirt() {
	const [isMouseIs, setIsmouseIn] = useState(false);
	return (
		<div className={`bg-black flex  z-[-1] max-lg:flex-col max-lg:pb-20`}>
			<div
				className=" overflow-hidden"
				onMouseEnter={() => setIsmouseIn(true)}
				onMouseLeave={() => setIsmouseIn(false)}>
				{" "}
				<img
					className={`w-[50vw] cursor-pointer max-lg:w-full  ${
						isMouseIs && ` scale-110 z-[-1]  `
					} ani z-1 `}
					src={posterIMG}
					alt=""
				/>
			</div>
			<div className="text-[white] flex items-center justify-center w-[50vw] max-lg:w-full ">
				<div className="flex flex-col gap-5 justify-center items-center">
					<h2 className=" text-4xl">חולצות גברים </h2>{" "}
					<Link to={"/man_shirts"}>
						<Button>קנה עכשיו</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
