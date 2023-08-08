export default function Button(props) {
	return (
		<button
			className=" border-2 text-lg border-[#ffffff85] px-10 py-1 rounded-sm hover:border-none hover:bg-[gray]  transition-all "
			onClick={props.onClick}>
			{props.children}{" "}
		</button>
	);
}
