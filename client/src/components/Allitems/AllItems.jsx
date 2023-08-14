import Loading from "../UI/Loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllItems() {
	const [dataa, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const callMe = async () => {
			setIsLoading(true);
			const data = await fetch(`https://satanic-omega.vercel.app/allItems`);
			const jsonData = await data.json();
			setData(jsonData);
			setIsLoading(false);
		};
		callMe();
	}, []);

	return (
		<div className="mt-40">
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div>
						<h2 className="mb-10 text-8xl text-center font-bold  font-serif">
							הכל
						</h2>
					</div>
					<div className="flex flex-wrap justify-around gap-10 ">
						{dataa.map((item) => {
							return (
								<div key={item._id}>
									{" "}
									<Link to={`/item/${item._id}`}>
										{" "}
										<img
											className={"w-[600px] rounded-xl hover:cursor-pointer"}
											src={item.images}
											alt=""
										/>
									</Link>
									<p className=" text-center text-2xl">{item.title} </p>
									<p className="text-center text-xl">{item.price}</p>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}
