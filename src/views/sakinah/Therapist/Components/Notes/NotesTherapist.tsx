import React from "react";
import data from "../Data/DummyData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddNotes from "./AddNotes";
const NotesTherapist = () => {
	return (
		<div>
			<div className="bg-pink-50 p-5 mb-5">Notes from the therapists</div>
			<div className="mb-5">
				<AddNotes placeholder="Please write the note here, notes are not visible for the client " />
			</div>

			<button className="btn-primary mb-5">Save Note</button>

			{data[0].notes.map((tag) => (
				<div className="text-sm min-w-full  inline-block  p-5 mb-5  text-stone-800 bg-yellow-50 border-l-black  border-l-2 last:mr-0 mr-1">
					<div className="flex ">
						<div className="text-xs text-gray-700 mb-2 cursor-pointer">
							<p> {tag.nameTherapist}</p>
							<p> {tag.date}</p>
						</div>
						<div className="flex right-0 ml-5 gap-2 cursor-pointer">
							<EditIcon style={{}} />
							<DeleteOutlineIcon />
						</div>
					</div>

					<p> {tag.note}</p>
				</div>
			))}
		</div>
	);
};

export default NotesTherapist;
