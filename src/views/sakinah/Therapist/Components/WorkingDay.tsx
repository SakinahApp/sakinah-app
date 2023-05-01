import React from "react";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const WorkingDay = ({
	day,
	handleChange,
	removeWorkingHours,
	dayIndex,
	addWorkingHours,
}) => {
	const [checked, setChecked] = useState(day.enable);

	return (
		<div>
			<div className="text-base flex flex-row font-medium my-3 mx-3 text-center">
				<label className="relative inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						checked={checked}
						className="sr-only peer"
						key={day.availibility_id}
						onClick={() => setChecked(!checked)}
					/>
					<div className="w-11 h-6 bg-gray-200 rounded-full peer    dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
					<span className="ml-4">{day.day}</span>
				</label>
			</div>
			{checked && (
				<button
					className="text-violet-500 hover:border-violet-600 border p-3 rounded-md text-xs mx-3"
					onClick={() => addWorkingHours(dayIndex)}
				>
					Add Working Hours <AddCircleOutlineIcon sx={{ color: "inherit" }} />
				</button>
			)}
			{day.working_hours.map((item, workingHoursIndex) => (
				<div className="flex  mx-3">
					{checked && (
						<>
							<input
								type="time"
								name="start"
								key={workingHoursIndex}
								value={item.start}
								className="w-44 p-2 border  border-gray-400 my-2 rounded-sm "
								onChange={(e) => handleChange(e, dayIndex, workingHoursIndex)}
							/>
							<span className="font-light text-slate-400 mx-4 flex items-center">
								to
							</span>
							<input
								type="time"
								name="end"
								value={item.end}
								className="w-44 p-2 border border-gray-400 my-2 rounded-sm"
								onChange={(e) => handleChange(e, dayIndex, workingHoursIndex)}
							/>
							<button
								className="text-red-400 ml-2"
								onClick={() => removeWorkingHours(dayIndex, workingHoursIndex)}
							>
								<DeleteOutlineIcon sx={{ color: "inherit" }} />
							</button>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default WorkingDay;
