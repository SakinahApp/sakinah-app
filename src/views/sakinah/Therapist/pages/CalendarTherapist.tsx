import React from "react";
import CalendarDashboard from "../Components/CalendarDashboard";
import TableCustomerProfile from "../Components/Tables/TableCustomerProfile";
import TableTherapist from "../Components/Tables/TableTherapist";

const CalendarTherapist = () => {
	return (
		<div className="m-5 flex">
			<CalendarDashboard therapist={true} />
			<TableTherapist />
		</div>
	);
};

export default CalendarTherapist;
