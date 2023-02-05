import React from "react";

const TabComponent = ({ tab1, tab2, tab3, openTab, setOpenTab, color }) => {
	return (
		<div>
			{" "}
			<ul
				className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
				role="tablist"
			>
				<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
					<a
						className={
							"text-xs font-bold uppercase  px-5 py-3 shadow-lg rounded block leading-normal " +
							(openTab === 1
								? "text-white bg-" + color + "-600"
								: "text-" + color + "-600 bg-white")
						}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(1);
						}}
						data-toggle="tab"
						href="#link1"
						role="tablist"
					>
						{tab1}
					</a>
				</li>
				<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
					<a
						className={
							"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
							(openTab === 2
								? "text-white bg-" + color + "-600"
								: "text-" + color + "-600 bg-white")
						}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(2);
						}}
						data-toggle="tab"
						href="#link2"
						role="tablist"
					>
						{tab2}
					</a>
				</li>
				{tab3 && (
					<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
						<a
							className={
								"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
								(openTab === 3
									? "text-white bg-" + color + "-600"
									: "text-" + color + "-600 bg-white")
							}
							onClick={(e) => {
								e.preventDefault();
								setOpenTab(3);
							}}
							data-toggle="tab"
							href="#link3"
							role="tablist"
						>
							{tab3}
						</a>
					</li>
				)}
			</ul>
		</div>
	);
};

export default TabComponent;
