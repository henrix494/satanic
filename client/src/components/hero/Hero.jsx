import "./hero.css";
import { Link } from "react-router-dom";
export default function Hero() {
	return (
		<div className="  max-h-[900px] max-lg:max-h-[100vh] h-[1200px] text flex  text-white lg:pr-[20%]  flex-col items-end    ">
			<div className="pt-[20%] text-right flex flex-col gap-10 max-lg:items-center max-lg:w-full justify-center max-lg:h-full max-lg:hidden">
				{" "}
				<h2 className="text-[white]  w-full font-[p22-spooky,sans-serif] text-6xl max-lg:text-center ">
					Satanic
				</h2>
				<h1 className="text-5xl font-[cabazon,serif] font-normal max-lg:text-center">
					אופנה אלטרנטיבית
				</h1>
				<h2 className=" text-5xl font-[cabazon,serif] font-normal  max-lg:text-center">
					25 % הנחה על כל החנות
				</h2>
				<Link to={"/all_items"} className=" hover:opacity-80">
					{" "}
					<button className="  py-2 rounded-lg text-2xl bg-[#000000] max-lg:w-[60%] hover:opacity-80 transition-all w-full ">
						קנה עכשיו
					</button>
				</Link>
			</div>

			<div className="pt-[20%] text-right flex flex-col gap-10 max-lg:items-center max-lg:w-full justify-center max-lg:h-full lg:hidden">
				{" "}
				<h2 className="text-[white]  w-full font-[p22-spooky,sans-serif] text-6xl max-lg:text-center ">
					Satanic
				</h2>
				<div>
					{" "}
					<div className="scroll-arrow"></div>
					<div className="scroll-arrow"></div>
					<div className="scroll-arrow"></div>
				</div>
			</div>
		</div>
	);
}
