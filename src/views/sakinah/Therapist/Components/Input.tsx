import React from "react";

const Input = ({ type, name, placeholder, value, onChange, required }) => {
	return (
		<div>
			<input
				className="appearance-none block  w-full  bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				accept=".png, .jpg, .jpeg"
			/>
		</div>
	);
};

export default Input;
