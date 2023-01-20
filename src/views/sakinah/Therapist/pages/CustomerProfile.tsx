import React from "react";
import data from "../Components/Data/DummyData";
import AvatarCustomers from "../Components/AvatarCustomers";
import TableCustomerProfile from "../Components/Tables/TableCustomerProfile";
import TabsComponent from "../Components/TabCustomer";

const tableHead = ["Date", "Time", "Status", "Paid", "Action"];

const CustomerProfile = () => {
	return (
		<div className="m-12 w-11/12">
			<div className="flex text-7xl items-center ">
				<AvatarCustomers name={data[0].name} />{" "}
				<div className="ml-5 font-medium cursor-pointer text-stone-900">
					{data[0].name}
				</div>
			</div>
			<div className="m-12 w-11/12">
				<TabsComponent color="blue" tab1="Profile" tab2="Notes" />
				<TableCustomerProfile tableHead={tableHead} data={data} />
			</div>
		</div>
	);
};

export default CustomerProfile;
