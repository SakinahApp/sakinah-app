import React from "react";
import payoutData from "./Data/PayoutData";

const PayoutHistory = () => {
	const payoutTitle = ["Date", "Amount", "Status"];

	return (
		<div>
			<div className="shadow-md rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							{payoutTitle.map((title) => (
								<th scope="col" className="px-6 py-3">
									{title}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{payoutData.map((item) => (
							<tr>
								<td className="px-6 py-4">{item.date}</td>
								<td className="px-6 py-4">£ {item.amount}</td>
								<td className={`px-6 py-4 ${item.status[1] && "text-green-500"}`}>
									{item.status[1]}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PayoutHistory;
