import React from "react";
import data from "./Data/DummyData";
import TabComponent from "./TabComponent";
import TableCustomerProfile from "./Tables/TableCustomerProfile";
import TableSales from "./Tables/TableSales";
import PayoutHistory from "./PayoutHistory";
import Onboarding1 from "../Onboarding/Onboarding1";
import Onboarding2 from "../Onboarding/Onboarding2";
import Onboarding3 from "../Onboarding/Onboarding3";

const TabOnboarding = () => {
	const [openTab, setOpenTab] = React.useState(1);
	const tableHead = ["Date", "Time", "Status", "Paid", "Action"];

	return (
		<>
			<div className="flex">
				<div className="w-full">
					<TabComponent
						tab1="Personal Details"
						tab2="Topics Covered"
						tab3="Main Topics"
						openTab={openTab}
						setOpenTab={setOpenTab}
						color="blue"
					/>
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
						<div className="px-4 py-5 flex-auto">
							<div className="tab-content tab-space">
								<div className={openTab === 1 ? "block" : "hidden"} id="link1">
									{/* Grid of profile information of the user : Phone, email, location */}
									<Onboarding1
										hidden={true}
										prevPage=""
										nextPage=""
										text="Save Changes"
									/>
								</div>
								<div className={openTab === 2 ? "block" : "hidden"} id="link2">
									<Onboarding2
										hidden={true}
										prevPage=""
										nextPage=""
										text="Save Changes"
									/>
									{/* Here should be what it should be showed when clicked on tab2 */}
								</div>
								<div className={openTab === 3 ? "block" : "hidden"} id="link2">
									<Onboarding3
										hidden={true}
										prevPage="/therapists/onboarding/2"
										nextPage="/therapists/"
										text="Save Changes"
									/>
									{/* Here should be what it should be showed when clicked on tab3 */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TabOnboarding;
