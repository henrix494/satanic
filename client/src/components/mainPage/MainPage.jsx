import Poster from "./poster/Poster";
import Smallpost from "./smallPost/Smallpost";
import ManShirt from "./manShirt/ManShirts";
import WomanShirt from "./WomanShirt/WomanShirt";
import AboutMain from "./aboutMain/AboutMain";
export default function MainPage() {
	return (
		<>
			<Poster />
			<Smallpost />
			<ManShirt />
			<WomanShirt />
			<AboutMain />
		</>
	);
}
