import React from "react";
import TableTherapist from "../Components/Tables/TableTherapist";
import CalendarDashboard from "../Components/Calendars/CalendarDashboard";
// import AvailabilityModal from "../Components/AvailabilityModal";
// import AvailabilityForm from "../Components/AvailabilityWorkingDay";
// import AvailabilityEditor from "../Components/AvailabilityWorkingDay";
// import AvailabilityBreaks from "../Components/AvailabilityBreaks";
import WorkingDays from "../Components/WorkingDays";
import CalendarTimeOff from "../Components/Calendars/CalendarTimeOff";

const CalendarTherapist = () => {
	return (
		<>
			<div className="m-5 flex">
				<CalendarDashboard therapist={true} />
				<TableTherapist />
			</div>

			<div className="border-t text-center pt-5 text-lg font-medium from-stone-600"> Edit Availability or Choose Dates Off</div>
			<div className="m-5 flex">
				<WorkingDays />
				<CalendarTimeOff therapist={true} />
			</div>
		</>
	);
};

export default CalendarTherapist;
