import React, { useState } from "react";

const AddNotes = ({ inputNote, setInputNote, handleSubmit, btn }) => {
	return (
		<form onSubmit={handleSubmit}>
			<textarea
				id="addnote"
				rows={4}
				value={inputNote}
				onChange={(e) => setInputNote(e.target.value)}
				className="block  p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-100 focus:bg-white focus:border-gray-500"
				placeholder="Please write the note here, notes are not visible for the client"
			></textarea>
			<button className="btn-primary mb-5" type="submit">
				{btn}
			</button>
		</form>
	);
};

export default AddNotes;
