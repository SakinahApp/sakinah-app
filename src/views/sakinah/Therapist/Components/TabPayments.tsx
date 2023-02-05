import React from "react";
import data from "./Data/DummyData";
import TabComponent from "./TabComponent";
import TableCustomerProfile from "./Tables/TableCustomerProfile";
import TableSales from "./Tables/TableSales";
import PayoutHistory from "./PayoutHistory";

const TabPayments = ({ color, tab1, tab2, tab3 }) => {
	const [openTab, setOpenTab] = React.useState(1);
	const tableHead = ["Date", "Time", "Status", "Paid", "Action"];

	return (
		<>
			<div className="flex">
				<div className="w-full">
					<TabComponent
						tab1={tab1}
						tab2={tab2}
						tab3={tab3}
						openTab={openTab}
						setOpenTab={setOpenTab}
						color={color}
					/>
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
						<div className="px-4 py-5 flex-auto">
							<div className="tab-content tab-space">
								<div className={openTab === 1 ? "block" : "hidden"} id="link1">
									{/* Grid of profile information of the user : Phone, email, location */}

									<TableSales tableHead={tableHead} data={data} />
								</div>
								<div className={openTab === 2 ? "block" : "hidden"} id="link2">
									<PayoutHistory />
									{/* Here should be what it should be showed when clicked on tab2 */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TabPayments;
