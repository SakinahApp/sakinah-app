import React from "react";
// import Table from '../Components/Table';
import TableTherapist from "../Components/Tables/TableTherapist";
import Dropdown from "../Components/ActionUpcomingSession";
import StatisticsCard from "../Components/StatisticsCard";
import { clients } from "../../../../assets/images/images";
import GroupsIcon from "@mui/icons-material/Groups";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import UpcomingSessionTherapist from "../Components/UpcomingSessionTherapist";
import TableExpandable from "../Components/Tables/TableExpandable";
import CalendarDashboard from '../Components/Calendars/CalendarDashboard';

const DashboardTherapist = () => {
	return (
		<div className="m-5">
			<div className="-ml-2">
				<UpcomingSessionTherapist />
			</div>
			<div className="flex ">
				<TableTherapist />
				{/* <TableExpandable /> */}
				<div className="max-w-xs ml-5">
					<CalendarDashboard therapist={true} />
				</div>
			</div>
			<div className="flex flex-wrap gap-6 mt-5">
				<StatisticsCard
					icon={<LaptopMacIcon />}
					iconColor="text-orange-500"
					iconBg="bg-orange-100"
					title="Sessions Held"
					number="125"
					text="this month"
				/>
				<StatisticsCard
					icon={<PersonAddAlt1Icon />}
					iconColor="text-blue-500"
					iconBg="bg-blue-100"
					title="New Clients"
					number="12"
					text="this month"
				/>
				<StatisticsCard
					icon={<CurrencyPoundIcon />}
					iconColor="text-green-500"
					iconBg="bg-green-100"
					title="Income"
					number="3,125.00"
					text="this month"
				/>
			</div>
		</div>
	);
};

export default DashboardTherapist;
