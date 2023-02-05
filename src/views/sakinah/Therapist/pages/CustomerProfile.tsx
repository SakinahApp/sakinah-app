import React from "react";
import data from "../Components/Data/DummyData";
import AvatarCustomers from "../Components/AvatarCustomers";
import TableCustomerProfile from "../Components/Tables/TableCustomerProfile";
import TabsComponent from "../Components/TabCustomer";
import clientData from "../Components/Data/ClientDetails";
import sessionData from "../Components/Data/SessionsData";
import notesData from "../Components/Data/NotesData";
import { useParams } from "react-router-dom";

const tableHead = ["Date", "Time", "Status", "Paid", "Action"];

const CustomerProfile = () => {
	const { id } = useParams();
	return (
		<>
			{clientData
				.filter((client) => client.user_id === id)
				.map((client) => (
					<div className="m-12 w-11/12">
						<div className="flex flex-col text-7xl items-center">
							<AvatarCustomers name={client.user_name} /> {}
							<span className="ml-5 font-medium cursor-pointer text-stone-900">
								{client.user_name}
							</span>
							<div className="m-12 w-11/12">
								<TabsComponent
									color="blue"
									tab1="Profile"
									tab2="Notes"
									tab3=""
									client={client}
								/>
								<TableCustomerProfile tableHead={tableHead} client={client} />
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default CustomerProfile;
