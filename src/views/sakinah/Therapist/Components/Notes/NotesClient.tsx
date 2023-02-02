import React from "react";
import data from "../Data/DummyData";
import notesData from "../Data/NotesData";
import dayjs from "dayjs";
const NotesClient = ({ client }) => {
	return (
		<div>
			<div className="bg-blue-50 p-5 mb-5">Notes from the customer</div>

			{notesData
				.filter(
					(note) => note.user_id === client.user_id && note.writtenBy === "user"
				)
				.map((note) => (
					<div className="text-sm min-w-full  inline-block  p-5 mb-5  text-stone-800 bg-orange-50 border-l-black  border-l-2 last:mr-0 mr-1">
						<div className="text-xs text-gray-700 mb-2">
							<p>{dayjs(note.date).utc().format("DD MMMM, YYYY")}</p>
						</div>
						<p> {note.note} </p>
					</div>
				))}

			<div className="border-t-2 mb-5 "></div>
		</div>
	);
};

export default NotesClient;
