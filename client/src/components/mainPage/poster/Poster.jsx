import { useState } from "react";
import posterIMG from "../../../assets/poster_main.jpg";
import Button from "../../UI/Button";
import "./poster.css";
import { Link } from "react-router-dom";

export default function Poster() {
	const [isMouseIs, setIsmouseIn] = useState(false);
	return (
		<div className={`bg-black flex  z-[-1] max-lg:flex-col max-lg:pb-20`}>
			<div
				className=" overflow-hidden"
				onMouseEnter={() => setIsmouseIn(true)}
				onMouseLeave={() => setIsmouseIn(false)}>
				{" "}
				<img
					className={`w-[50vw] cursor-pointer max-lg:w-full   ${
						isMouseIs && ` scale-110 z-[-1]  `
					} ani z-1 `}
					src={posterIMG}
					alt=""
				/>
			</div>
			<div className="text-[white] flex items-center justify-center w-[50vw] max-lg:w-full ">
				<div className="flex flex-col gap-5 justify-center items-center">
					<h2 className=" text-4xl max-lg:text-center">פוסטרים ענקיים</h2>
					<Link to={"/bigPosters"}>
						<Button>קנה עכשיו</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
