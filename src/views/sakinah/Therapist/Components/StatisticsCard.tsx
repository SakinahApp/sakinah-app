import React from "react";

const StatisticsCard = ({ icon, title, number, text, iconColor, iconBg }) => {
	return (
		<div>
			<div className="max-w-sm min-w-full cursor-pointer pr-6 pl-2 py-1  rounded-lg shadow-xs overflow-hidden border shadow-md   ">
				<div className="p-4 flex items-center">
					<div className={`p-3 rounded-full ${iconColor} ${iconBg}`}>{icon}</div>
					<div className="ml-3">
						<p className="mb-2 text-sm font-medium text-gray-600">{title}</p>
						<p className="text-lg font-semibold text-gray-700">{number}</p>
						<p className="text-gray-400 mt-2 text-xs">{text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatisticsCard;
