import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import notesData from "../Data/NotesData";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(utc);

const SingleNoteTherapist = ({ note, notes, setNotes }) => {
	const [data, setData] = useState(notesData);
	const [selectedNote, setSelectedNote] = useState(null);
	const [editNote, setEditNote] = useState(note.note);

	const handleEdit = (note) => {
		setSelectedNote(note);
		// console.log("selectedNote", selectedNote);
	};

	const handleSave = () => {
		const newNotesData = [...notesData];
		const index = notesData.findIndex(
			(note) => note.user_id === selectedNote.user_id
		);
		newNotesData[index] = { ...note, note: editNote };
		setSelectedNote(null);
	};

	const handleDelete = (id) => {
		setNotes(notes.filter((noteDelete) => noteDelete.note_id !== id));
	};

	return (
		<div>
			<div
				key={note.user_id}
				className="text-sm min-w-full p-5 mb-5  text-stone-800 bg-yellow-50 border-l-black  border-l-2 last:mr-0 mr-1"
			>
				<div className="flex justify-between">
					<div className="text-xs text-gray-700 mb-2 cursor-pointer">
						<p> {note.nameTherapist}</p>
						<p>
							{dayjs(note.date).utc().fromNow()} <span>on </span>
							{dayjs(note.date).utc().format("DD MMMM, YYYY")}
						</p>
					</div>

					<div className="right-0 gap-5">
						<span
							className="cursor-pointer text-stone-500"
							onClick={() => handleEdit(note)}
						>
							<EditIcon />
						</span>
						<span
							className="cursor-pointer text-stone-500"
							onClick={() => handleDelete(note.note_id)}
						>
							<DeleteOutlineIcon />
						</span>
					</div>
				</div>
				{/* 	@ts-ignore */}
				{selectedNote === note ? (
					<form onSubmit={handleSave}>
						<textarea
							className="min-w-full"
							value={editNote}
							onChange={(e) => setEditNote(e.target.value)}
						/>
						<button
							className="border my-2 rounded-md bg-green-200 p-2 hover:bg-green-300 border-x-green-300"
							type="submit"
						>
							Save Edit
						</button>
					</form>
				) : (
					<p>{editNote}</p>
				)}
			</div>
			{/* 	@ts-ignore */}
			<div> </div>
		</div>
	);
};

export default SingleNoteTherapist;
