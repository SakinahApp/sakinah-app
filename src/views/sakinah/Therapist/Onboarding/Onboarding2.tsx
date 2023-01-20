import React, { useState } from "react";
import { Box } from "@mui/material";
import { Container, margin } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';

const Questionaire2 = ({hidden}) => {
	const feelings = [
		"Apathy",
		"Mood change",
		"Depression",
		"Anxiety & fears",
		"Guilt",
		"Burnout",
	];
	const behaviour = [
		"Compulsive thoughts",
		"Selfharm",
		"Violent trauma",
		"Anger issues",
		"Self-control",
		"Suicide attempts",
	];
	const habits = [
		"Nicotine withdrawal",
		"Substance abuse",
		"Compuslive behaviour",
		"Consumatory behavior",
		"Other chemical dependencies",
	];
	const self = [
		"Life purpose",
		"Lack of conviction",
		"Self-assessment",
		"Loneliness",
	];
	const relationship = [
		"Codependency",
		"Intercourse",
		"Betrayal",
		"Breakup",
		"Paternity",
		"Pregnancy care",
		"LGBTQ-relations",
		"Relationship",
		"Jealousy",
	];
	const selfDevelopment = [
		"Professional relationship",
		"Self-improvement",
		"New normal",
		"Trauma",
		"Crisis",
		"Finance",
		"Grief",
		"PTSD",
	];
	const experiences = [
		"Panic attacks",
		"Grief",
		"PTSD",
		"Chronic stress",
		"Trauma",
		"Psychosomatics",
	];
	const couples = [
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
	];

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
			<Container>
				<h2 style={{ fontSize: "3rem", margin: "3rem 0 2rem 0" }}>
					Select topics you work with{" "}
					<span className="text-blue-400">individuals </span>
				</h2>
				<h3 className="font-semibold text-lg my-5 text-stone-900 ">
					Feelings and emotions, complex experiences and states
				</h3>
				<div className="grid grid-cols-2 ">
					{feelings.map((item) => (
						<div className="flex mb-3 items-center">
							<input
								id={item}
								type="checkbox"
								value=""
								className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
							/>
							<label htmlFor={item} className="ml-3 text-base font-normal text-stone-800">
								{item}
							</label>
						</div>
					))}
				</div>
				<h3 className="font-semibold text-lg my-5 text-stone-900 ">
					Behavior and thoughts, uncontrollable actions
				</h3>
				<div className="grid grid-cols-2 ">
					{behaviour.map((item) => (
						<div className="flex mb-3 items-center">
							<input
								id={item}
								type="checkbox"
								value=""
								className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
							/>
							<label htmlFor={item} className="ml-3 text-base font-normal text-stone-800">
								{item}
							</label>
						</div>
					))}
				</div>
				<h3 className="font-semibold text-lg my-5 text-stone-900 ">
					Bad habits and addictions
				</h3>
				<div className="grid grid-cols-2 ">
					{habits.map((item) => (
						<div className="flex mb-3 items-center">
							<input
								id={item}
								type="checkbox"
								value=""
								className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
							/>
							<label htmlFor={item} className="ml-3 text-base font-normal text-stone-800">
								{item}
							</label>
						</div>
					))}
				</div>
				<h3 className="font-semibold text-lg my-5 text-stone-900 ">
					Self-relationships, self-esteem, psychosomatics
				</h3>
				<div className="grid grid-cols-2 ">
					{self.map((item) => (
						<div className="flex mb-3 items-center">
							<input
								id={item}
								type="checkbox"
								value=""
								className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
							/>
							<label htmlFor={item} className="ml-3 text-base font-normal text-stone-800">
								{item}
							</label>
						</div>
					))}
				</div>
				<h3 className="font-semibold text-lg my-5 text-stone-900 ">
					Relationships, intimacy, family, sex{" "}
				</h3>
				<div className="grid grid-cols-2 ">
					{relationship.map((item) => (
						<div className="flex mb-3 items-center">
							<input
								id={item}
								type="checkbox"
								value=""
								className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
							/>
							<label htmlFor={item} className="ml-3 text-base font-normal text-stone-800">
								{item}
							</label>
						</div>
					))}
				</div>
				<h3 className="font-semibold text-lg my-5 text-stone-900 ">
					Self-development and changing living conditions
				</h3>
				<div className="grid grid-cols-2 ">
					{selfDevelopment.map((item) => (
						<div className="flex mb-3 items-center">
							<input
								id={item}
								type="checkbox"
								value=""
								className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
							/>
							<label htmlFor={item} className="ml-3 text-base font-normal text-stone-800">
								{item}
							</label>
						</div>
					))}
				</div>
				<h3 className="font-semibold text-lg my-5 text-stone-900 ">
					Difficult experiences and states
				</h3>
				<div className="grid grid-cols-2 ">
					{experiences.map((item) => (
						<div className="flex mb-3 items-center">
							<input
								id={item}
								type="checkbox"
								value=""
								className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
							/>
							<label htmlFor={item} className="ml-3 text-base font-normal text-stone-800">
								{item}
							</label>
						</div>
					))}
				</div>

				<h2 style={{ fontSize: "3rem", margin: "3rem 0 2rem 0" }}>
					Select topics you work with <span className="text-blue-400">couples</span>
				</h2>

				<div className="grid grid-cols-2 ">
					{couples.map((item) => (
						<div className="flex mb-3 items-center">
							<input
								id={item}
								type="checkbox"
								value=""
								className="w-5 h-5 rounded-md text-sky-500 border-gray-100"
							/>
							<label htmlFor={item} className="ml-3 text-base font-normal text-stone-800">
								{item}
							</label>
						</div>
					))}
				</div>

				<div className="flex">
					<div className="w-max border rounded-xl border-stone-400 flex flex-col mt-10 ">
						<h3 className="mx-3 mt-3"> Price of individual session per 50 mins</h3>

						<input
							type="text"
							id="indivSessionPrice"
							pattern="^\£?[0-9]+(\.[0-9]{2})?$"
							className="border rounded-xl h-8 pl-2 w-10/12 mx-auto my-3"
							required
							placeholder="£"
						/>
					</div>
					<div className="w-max border rounded-xl border-stone-400 mx-auto flex flex-col mt-10 ">
						<h3 className="mx-3 mt-3"> Price of couples session per 1.5h</h3>

						<input
							type="text"
							id="indivSessionPrice"
							pattern="^\£?[0-9]+(\.[0-9]{2})?$"
							className="border rounded-xl h-8 pl-2 w-10/12 mx-auto my-3"
							required
							placeholder="£"
						/>
					</div>
				</div>
			</Container>

			<div className={`bg-gray-50 w-full mt-10 border-t border-blue-300 ${hidden && "hidden"}`}>
				<Container>
					<div className="flex justify-between py-10">
						<Link to="/therapists/onboarding/">
						<button className="btn-secondary ">Back</button>
						</Link>
						<Link to="/therapists/onboarding/3"> <button className="btn-primary ">Next</button></Link>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Questionaire2;
