import React from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import data from "./Data/DummyData";

const Search = () => {
	const handleSearch = (e) => {
		const filterNames = data.filter((item) =>
			item.name.toLowerCase().includes(e.toLowerCase())
		);
	};
	return (
		<div className="flex ">
			<div className="mb-3 ">
				<div className="input-group relative flex flex-nowrap items-stretch w-full mb-4">
					<input
						type="search"
						onChange={(e) => handleSearch(e.target.value)}
						className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="button-addon2"
					/>
					<span>
						<button
							className="btn px-6 py-2.5 bg-blue-600 text-white text-xs   rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
							type="button"
							id="button-addon2"
						>
							<PersonSearchIcon />
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Search;
