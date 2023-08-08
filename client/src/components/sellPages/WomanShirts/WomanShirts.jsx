import Loading from "../../UI/Loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function WomanShirts() {
	const [dataa, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const callMe = async () => {
			setIsLoading(true);
			const data = await fetch(
				`https://satanic-omega.vercel.app/items/woman_shirt`,
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			);
			const jsonData = await data.json();
			console.log(jsonData);
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
				<div className="flex flex-wrap justify-around gap-10 rounded-xl">
					{dataa.map((item) => {
						return (
							<div key={item.id}>
								{" "}
								<Link to={`/man_shirt_s/${item._id}`}>
									{" "}
									<img
										className={"w-[600px] rounded-xl hover:cursor-pointer"}
										src={item.images}
										alt=""
									/>
								</Link>
								<p className=" text-center text-2xl">{item.title}</p>
								<p className="text-center text-xl">{item.price}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
