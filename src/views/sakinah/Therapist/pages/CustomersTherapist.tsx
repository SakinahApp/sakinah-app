import React from "react";
import Search from "../Components/Search";
import TableTherapist from "../Components/Tables/TableTherapist";
import data from "../Components/Data/DummyData";
import AvatarCustomers from "../Components/AvatarCustomers";
import { Link } from "react-router-dom";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useState } from "react";

const CustomersTherapist = () => {
	const [filteredNames, setFilteredNames] = useState(data);
	const handleSearch = (e) => {
		const filtered = data.filter((item) =>
			item.name.toLowerCase().includes(e.toLowerCase())
		);
		setFilteredNames(filtered);
	};

	return (
		<div className="m-10 ">
			<div className="flex ">
				<div className="mb-3 ">
					<div className="input-group relative flex flex-nowrap items-stretch w-full mb-4">
						<input
							type="search"
							onChange={(e) => handleSearch(e.target.value)}
							className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							placeholder="Search customer"
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

			<table className="">
				<thead>
					<tr className="text-left">
						<th>Name</th>
						<th>Gender</th>
					</tr>
				</thead>
				<tbody>
					{filteredNames
						.sort((a, b) => (a.name > b.name ? 1 : -1))
						.map((item) => (
							<tr>
								<Link
									key={item.id}
									to={`${item.id}`}
									className="flex flex-nowrap my-5  gap rounded-2xl items-center hover:bg-slate-100"
								>
									<AvatarCustomers name={item.name} />
									<td className="ml-3 font-medium text-lg cursor-pointer  text-stone-900 w-full">
										{item.name}
									</td>
									<td className=" ml-20 font-medium text-lg cursor-pointer text-stone-900 w-full">
										{item.gender}
									</td>
								</Link>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default CustomersTherapist;
