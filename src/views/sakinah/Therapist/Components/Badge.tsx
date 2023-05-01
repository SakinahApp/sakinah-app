import React from "react";

const Badge = ({ text }) => {
	return (
		<span className="text-lg font-semibold inline-block py-1 px-2 uppercase rounded text-sky-700 bg-sky-200 last:mr-0 mr-1">
			{text}
		</span>
	);
};

export default Badge;
