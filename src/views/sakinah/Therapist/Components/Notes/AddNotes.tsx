import React from "react";

const AddNotes = ({ placeholder }) => {
	return (
		<div>
			<textarea
				id="message"
				rows={4}
				className="block  p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-100 focus:bg-white focus:border-gray-500"
				placeholder={placeholder}
			></textarea>
		</div>
	);
};

export default AddNotes;
