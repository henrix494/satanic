export default function Contact() {
	return (
		<div className="h-[260px] flex items-center justify-center text-center">
			<div>
				{" "}
				<div className=" max">
					<h2 className="text-3xl">השאר מייל ליצירת קשר</h2>
				</div>
				<div className=" flex max-lg:flex-col max-lg:gap-5">
					<div className=" flex flex-col">
						{" "}
						<label
							className="self-start text-xl max-lg:mb-2 max-lg:mt-2"
							htmlFor="email">
							מייל*
						</label>
						<input
							className="border-2 w-[40vw] h-[45px] max-lg:w-full"
							type="text"
							id="email"
							name="email"
						/>
					</div>
					<div className="self-end max-lg:self-center  ml-5 h-full ">
						<button className="border-2 px-20 py-2 bg-black text-white hover:opacity-80 transition-all h-full">
							שלח
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
