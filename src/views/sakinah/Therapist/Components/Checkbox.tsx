import React from "react";

const Checkbox = ({item, name, onChange, checked}) => {
	return (
		<div className="flex mb-3 items-center">
			<input
				id={item}
				key={item}
				type="checkbox"
				className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
				value={item}
				name={name}
				onChange={onChange}
				checked={checked}
			/>
			<label htmlFor={item} className="ml-3 text-base font-normal text-stone-800">
				{item}
			</label>
		</div>
	);
};

export default Checkbox;
