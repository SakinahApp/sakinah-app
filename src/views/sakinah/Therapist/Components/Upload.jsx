import React, { useState } from "react";

const Upload = ({ title, type, onChange, name }) => {
	// const [files, setFiles] = useState([]);
	// const handleChange = (event) => {
	// 	setFiles(event.target.files);
	// };

	return (
		<div className="mt-5">
			<input
				className="block w-full mb-5 text-xs text-gray-400 border border-gray-300 rounded cursor-pointer bg-gray-50"
				name={name}
				type={type}
				onChange={onChange}
				// onClick={handleChange}
			/>
			{/* <ul>
				{Array.from(files).map((file) => (
					<li key={file.name}>
						{" "}
						{file.name}{" "}
						<button
							type="button"
							onClick={() =>
								setFiles((prevFiles) => prevFiles.filter((f) => f !== file))
							}
						>
							Delete
						</button>{" "}
					</li>
				))}
			</ul> */}
		</div>
	);
};

export default Upload;
