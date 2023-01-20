import React, { useState } from "react";
import { Box } from "@mui/material";
import { Container, margin } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Questionaire3 = ({ hidden, text }) => {
	const data = [
		"Apathy",
		"Abuse",
		"Breakup/Divorce",
		"Cheating",
		"Treason",
		"Domestic violence",
		"Conflicts",
		"Financial issues",
		"Trauma",
		"Jealousy",
		"Parenting",
		"Loss",
		"Sexual sphere",
		"Other",
		"Mood change",
		"Depression",
		"Anxiety & fears",
		"Guilt",
		"Burnout",
		"Compulsive thoughts",
		"Selfharm",
		"Violent trauma",
		"Anger issues",
		"Self-control",
		"Suicide attempts",
		"Nicotine withdrawal",
		"Substance abuse",
		"Compuslive behaviour",
		"Consumatory behavior",
		"Other chemical dependencies",
		"Life purpose",
		"Lack of conviction",
		"Self-assessment",
		"Loneliness",
		"Codependency",
		"Intercourse",
		"Betrayal",
		"Breakup",
		"Paternity",
		"Pregnancy care",
		"LGBTQ-relations",
		"Relationship",
		"Jealousy",
		"Professional relationship",
		"Self-improvement",
		"New normal",
		"Trauma",
		"Crisis",
		"Finance",
		"Grief",
		"PTSD",
		"Panic attacks",
		"Grief",
		"PTSD",
		"Chronic stress",
		"Trauma",
		"Psychosomatics",
	];

	return (
		<div>
			<Container style={{ background: "white" }}>
				{/* Select up to 12 */}

				<h2 className="text-2xl mt-8 w-11/12 mb-5">
					From the topics you have chosen, choose the main requests in individual
					therapy ( <span className="font-semibold">up to 15</span> )
				</h2>
				<p className="text-gray-600 w-11/12 mb-5">
					This information will be displayed for future customers on your page. These
					topics should briefly describe your line of work.
				</p>
				<div className="grid grid-cols-2 ">
					{data.sort().map((item) => (
						<div className="flex mb-3 items-center">
							<input
								id={item}
								type="checkbox"
								value=""
								className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
							/>
							<label
								htmlFor={item}
								className="ml-3 text-base font-normal text-stone-800"
							>
								{item}
							</label>
						</div>
					))}
				</div>
			</Container>

			<div className={`bg-gray-50 w-full mt-10 border-t border-blue-300`}>
				<Container>
					<div className="flex justify-between py-10">
						<Link to="/therapists/onboarding/2" className={`${hidden && "hidden"}`}>
							<button className="btn-secondary">Back</button>
						</Link>
						<button className="btn-primary ">{text}</button>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Questionaire3;
