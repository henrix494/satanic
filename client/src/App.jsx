import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import MainPage from "./components/mainPage/MainPage";
import BigPosters from "./components/sellPages/BigPosters/BigPosters";
import Frames from "./components/sellPages/Frames/Frames";
import SingleItem from "./components/singleItem/SingleItem";
import SingleFrame from "./components/singleItem/SingleFrame";
import Cart from "./components/cart/Cart";
import AllManShirts from "./components/sellPages/Man_shirt/AllmanShirts";
import SingleManShirt from "./components/singleItem/SingleManShirt";
import WomanShirts from "./components/sellPages/WomanShirts/WomanShirts";
import SingleWomanShirt from "./components/singleItem/SingleWomanShirt";
import AllItems from "./components/Allitems/AllItems";
import Bill from "./components/bill/Bill";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
function App() {
	return (
		<>
			{" "}
			<div className=" relative  ">
				<Navbar />
			</div>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="mt-20">
								{" "}
								<Hero />
							</div>
							<MainPage />
							<Contact />
						</>
					}
				/>
				<Route path="/bigPosters" element={<BigPosters />} />
				<Route path="/frames" element={<Frames />} />
				<Route path="/man_shirt_s/:id" element={<SingleManShirt />} />
				<Route path="/SingleWomanShirts/:id" element={<SingleWomanShirt />} />
				<Route path="/man_shirts" element={<AllManShirts />} />
				<Route path="/woman_shirts" element={<WomanShirts />} />
				<Route path="/all_items" element={<AllItems />} />
				<Route path="/item/:id" element={<SingleItem />} />{" "}
				<Route path="/frame/:id" element={<SingleFrame />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/bill" element={<Bill />} />
			</Routes>
			<div className="w-screem h-[50px] bg-[gray] text-white flex items-center justify-center ">
				{" "}
				&hearts; NPN עוצב על ידי{" "}
			</div>
		</>
	);
}

export default App;
