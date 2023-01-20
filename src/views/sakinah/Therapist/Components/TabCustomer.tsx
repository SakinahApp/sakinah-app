import React from "react";
import data from "./Data/DummyData";
import NotesTherapist from "./Notes/NotesTherapist";
import NotesClient from "./Notes/NotesClient";
import TabComponent from "./TabComponent";

const TabsCustomer = ({ color, tab1, tab2 }) => {
	const [openTab, setOpenTab] = React.useState(1);
	return (
		<>
			<div className="flex">
				<div className="w-full">
					<TabComponent
						tab1={tab1}
						tab2={tab2}
						color={color}
						openTab={openTab}
						setOpenTab={setOpenTab}
					/>
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
						<div className="px-4 py-5 flex-auto">
							<div className="tab-content tab-space">
								<div className={openTab === 1 ? "block" : "hidden"} id="link1">
									{/* Grid of profile information of the user : Phone, email, location */}
									<div className="grid grid-cols-2  gap-3 ">
										<div className="text-gray-500">Phone:</div>
										<div>{data[0].phone}</div>
										<div className="text-gray-500">Email:</div>
										<div>{data[0].email}</div>
										<div className="text-gray-500">Location:</div>
										<div>{data[0].location}</div>
										<div className="text-gray-500">Tags</div>
										<div>
											{data[0].tags.map((tag) => (
												<span className="text-sm font-semibold inline-block m-1 py-1 px-2 uppercase rounded text-sky-700 bg-sky-200 last:mr-0 mr-1">
													{" "}
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
								<div className={openTab === 2 ? "block" : "hidden"} id="link2">
									<NotesClient />
									<NotesTherapist />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TabsCustomer;
