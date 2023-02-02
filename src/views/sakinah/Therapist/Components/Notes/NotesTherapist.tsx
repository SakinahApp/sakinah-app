import React, { useState } from "react";
import data from "../Data/DummyData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddNotes from "./AddNotes";
import notesData from "../Data/NotesData";
import SingleNoteTherapist from "./SingleNoteTherapist";
import dayjs from "dayjs";

const NotesTherapist = ({ client }) => {
	const [notes, setNotes] = useState(notesData);
	const [inputNote, setInputNote] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setNotes([
			...notes,
			{
				therapist_id: "11",
				user_id: client.user_id,
				nameUser: client.user_name,
				note_id: client.note_id,
				nameTherapist: "Abdullah Arabi",
				date: dayjs().format("DD MMMM, YYYY, HH:mm"),
				note: inputNote,
				writtenBy: "therapist",
			},
		]);
		setInputNote("");
	};

	return (
		<>
			<div className="bg-pink-50 p-5 mb-5">Notes from the therapists</div>
			<div className="mb-5">
				{/* <AddNotes placeholder="Please write the note here, notes are not visible for the client " /> */}

				<AddNotes
					handleSubmit={handleSubmit}
					inputNote={inputNote}
					setInputNote={setInputNote}
					btn="Save Note"
				/>
				{notes
					.filter(
						(note) =>
							note.user_id === client.user_id && note.writtenBy === "therapist"
					)
					.map((note) => (
						<SingleNoteTherapist note={note} notes={notes} setNotes={setNotes} />
					))}
			</div>
		</>
	);
};

export default NotesTherapist;
