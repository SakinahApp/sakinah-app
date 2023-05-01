import React from "react";
import StatisticsCard from "../Components/StatisticsCard";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SouthIcon from "@mui/icons-material/South";
import TabPayments from "../Components/TabPayments";
import Tabs from "../Components/TabCustomer";
import TableCustomerProfile from "../Components/Tables/TableCustomerProfile";
import data from "../Components/Data/DummyData";
import TableSales from "../Components/Tables/TableSales";

const tableHead = ["Date", "Time", "Status", "Paid", "Action"];

const PaymentsTherapist = () => {
	return (
		<div className="m-5">
			<div className="flex gap-6">
				<StatisticsCard
					icon={<CurrencyPoundIcon />}
					iconColor="text-green-500"
					iconBg="bg-green-100"
					title="Income"
					number="3,125.00"
					text="this month"
				/>
				<StatisticsCard
					icon={<AccountBalanceWalletIcon />}
					iconColor="text-sky-600"
					iconBg="bg-sky-100"
					title="Balance"
					number="3,125.00"
					text="available"
				/>
				<StatisticsCard
					icon={<SouthIcon />}
					iconColor="text-yellow-600"
					iconBg="bg-yellow-100"
					title="Withdrawn"
					number="3,125.00"
					text="this month"
				/>
			</div>
			{/* <Tabs /> */}
			<TabPayments
				color="blue"
				tab1="Sales History"
				tab2="Payout History"
				tab3=""
				tab4=""
			/>
		</div>
	);
};

export default PaymentsTherapist;
