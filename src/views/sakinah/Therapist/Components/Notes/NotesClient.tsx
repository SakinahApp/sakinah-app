import React from "react";
import data from "../Data/DummyData";
const NotesClient = () => {
	return (
		<div>
			<div className="bg-blue-50 p-5 mb-5">Notes from the customer</div>

			{data[0].customerNotes.map((item) => (
				<div className="text-sm min-w-full  inline-block  p-5 mb-5  text-stone-800 bg-yellow-50 border-l-black border-l border-l-2 last:mr-0 mr-1">
					<div className="text-xs text-gray-700 mb-2">
						<p> {item.date}</p>
					</div>
					<p> {item.text}</p>
				</div>
			))}
		</div>
	);
};

export default NotesClient;
