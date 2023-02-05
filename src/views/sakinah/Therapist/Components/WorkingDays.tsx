import React, { useState } from "react";
import dayjs from "dayjs";
import availabilityData from "./Data/Availability";
import WorkingDay from "./WorkingDay";

const WorkingDays = () => {
	const [workingDays, setWorkingDays] = useState(availabilityData);

	const handleChange = (event, dayIndex, workingHoursIndex) => {
		const newWorkingDays = [...workingDays];
		newWorkingDays[dayIndex].working_hours[workingHoursIndex][event.target.name] =
			event.target.value;
		setWorkingDays(newWorkingDays);
	};

	const addWorkingHours = (dayIndex) => {
		const newWorkingDays = [...workingDays];
		newWorkingDays[dayIndex].working_hours.push({ start: "", end: "" });
		setWorkingDays(newWorkingDays);
	};

	const removeWorkingHours = (dayIndex, workingHoursIndex) => {
		const newWorkingDays = [...workingDays];
		newWorkingDays[dayIndex].working_hours.splice(workingHoursIndex, 1);
		setWorkingDays(newWorkingDays);
	};

	return (
		<div className="w-full  flex-col gap-1">
			{workingDays.map((day, dayIndex) => (
				<div
					key={day.availibility_id}
					className="mt-4 p-2 border  border-slate-300"
				>
					<WorkingDay
						day={day}
						handleChange={handleChange}
						removeWorkingHours={removeWorkingHours}
						dayIndex={dayIndex}
						addWorkingHours={addWorkingHours}
					/>
				</div>
			))}
			{/* @ts-ignore */}
			<div>{console.log("	day :>> ", workingDays)}</div>
		</div>
	);
};

export default WorkingDays;

// const handleChange = (event, dayIndex, workingHoursIndex) => {
//  const newWorkingDays = [...workingDays];
//  newWorkingDays[dayIndex].working_hours[workingHoursIndex][event.target.name] = event.target.value;
//  setWorkingDays(newWorkingDays);
// };

// How did it do in such a small step ? Shouldn't we have cloned day object, clone working_hours array,
// and clone objects inside working_hours ?

// No, there's no need to deeply clone the entire working_hours array and individual objects inside it.
//By using the spread operator(...), we create a shallow copy of the workingDays array and all its objects
// are still referencing the original objects.When we update the specific working_hours object, we are only
//changing the properties of that object, not the entire object itself.

// So in this case, newWorkingDays[dayIndex].working_hours[workingHoursIndex][event.target.name] = event.target.value;
//updates the specific property of the working_hours object(e.g. "start" or "end") that corresponds to the event.target.name value,
//which is determined by the name attribute of the input element that triggered the handleChange function.
// We then call setWorkingDays to update the state with the updated newWorkingDays array, which will re-render the component and reflect the changes.

// In this data structure, when changing the working hours, you need to do a shallow copy.When updating the working_hours array
// for a day, you only need to update the individual objects within the array.You do not need to create a new copy of the entire
// array, since you are only modifying its contents.The shallow copy of the entire workingDays array will ensure that the state
// remains updated correctly and prevents unexpected behavior.

// Deep copy needed, because has nested object

// const user = {
//  name: "John Doe",
//  address: {
//    street: "123 Main St",
//    city: "San Francisco",
//    state: "CA",
//    zip: "94105"
//  },
//  orders: [
//    { order_id: 1, total: 100 },
//    { order_id: 2, total: 200 },
//    { order_id: 3, total: 300 }
//  ]
// };

// Shallow copy needed, because we just modify values of working_hours

// const availabilityData = [
// 	{
// 		availibility_id: "111",
// 		therapist_id: "11",
// 		enable: true,
// 		day: "Monday",
// 		working_hours: [
// 			{ start: "12:22", end: "13:00" },
// 			{ start: "16:00", end: "17:00" },
// 		],
// 	},]

// When you change the working hours, you are only modifying the working_hours array which is an array of objects,
// but the objects themselves are primitive values like strings, which are primitive data types in JavaScript and can
//be copied by value.So, a shallow copy is sufficient in this case.

// However, in the case of the user object, it contains nested objects, such as the address object and orders array.
//When you change the values of these nested objects, you need to make a deep copy to ensure that you don't modify the
//original object.This is because the nested objects are references to objects, not primitive values.Changing the values
//of a nested object would result in changes to the original object, which you might not want.Hence, you need to make a
//deep copy to ensure that you are working with a completely separate copy of the original object.
