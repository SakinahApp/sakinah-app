import React, { useState } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Upload from '../Components/Upload';
import { Link } from 'react-router-dom';

const Onboarding1 = ({hidden}) => {
	const [gender, setGender] = useState(null);

	const handleChange = (event, newAlignment) => {
		setGender(newAlignment);
	};

	const qualifications = ["Consulting psychology", "Psychotherapist", "MSc", "BACP", "MBACP", "MSc", "MA", "PhD", "BACP", "Other"];
	const treatment = [
		"Creative Therapy ",
		"Cognitive Behavioural",
		"Existential",
		"Gestalt",
		"Humanistic",
		"Integrative",
		"Person-Centred",
		"Psychodynamic",
		"Relational",
		"Trauma Focused",
		"Strength-Based",
		"Other",
	];

	const languages = ["English", "Arabic", "Urdu", "Bengali", "Other"];

	return (
		<div>

			<Container>
				<p className={`flex m-auto max-w-lg text-lg mt-12 text-stone-700 ${hidden && "hidden" } `}>
					Thank you for signing up to join our platform! We are grateful for your
					interest and are looking forward to working with you. We know that your
					time is valuable, and we appreciate you taking the time to complete the
					necessary forms. Please be assured that the process will not take too long,
					and we are here to support you every step of the way. <br />
					Thank you again for joining us
				</p>

				<form className="w-full max-w-lg mt-12 flex flex-col mx-auto">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="ther-firtName"
							>
								First Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="ther-firtName"
								type="text"
								placeholder="Jane"
								required
							/>
							{/* <p className="text-red-500 text-xs italic">
								Please fill out this field.
							</p> */}
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="ther-lastName"
							>
								Last Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="ther-lastName"
								type="text"
								placeholder="Doe"
							/>
						</div>
					</div>

					<ToggleButtonGroup
						color="primary"
						value={gender}
						exclusive
						onChange={handleChange}
						aria-label="Platform"
						style={{ borderColor: "#e5e7eb", height: 56 }}
					>
						<ToggleButton
							value="male"
							style={{
								display: "flex",
								flex: 1,
								width: 250,
								borderColor: "#e5e7eb",
							}}
						>
							Male
						</ToggleButton>
						<ToggleButton
							value="female"
							style={{
								display: "flex",
								flex: 1,
								width: 250,
								borderColor: "#e5e7eb",
							}}
						>
							Female
						</ToggleButton>
					</ToggleButtonGroup>

					<div className="flex flex-wrap -mx-3 my-6">
						<div className="w-full px-3">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="ther-phoneNumber"
							>
								Phone number 📞
							</label>
							<input
								className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="ther-phoneNumber"
								pattern="^[0-9\+]+$"
								type="tel"
								placeholder="+447865432109"
								required
							/>
							<p className="text-gray-600 text-xs italic">
								Enter with the country code
							</p>
						</div>
					</div>

					<div className="flex flex-wrap -mx-3 mb-2">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="city"
							>
								City
							</label>
							<input
								className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="city"
								type="text"
								placeholder="London"
							/>
						</div>
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="country"
							>
								Country
							</label>
							<div className="relative">
								<select
									className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="country"
								>
									<option>UK</option>
									<option>US</option>
									<option>Europe</option>
									<option>UAE</option>
									<option>Other</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg
										className="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>

						<div className="flex flex-wrap mt-5">
							<div className="w-full px-3">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									htmlFor="experience"
								>
									Full years of Practice
								</label>
								<input
									className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="experience"
									pattern="^[0-9\+]+$"
									type="tel"
									placeholder="12"
									required
								/>
								<p className="text-gray-600 text-xs italic">
									Enter the number of years of active practice . If you have had a break
									in practice (for example, 3 years without practice), please do not
									count this break against your return.{" "}
								</p>
							</div>
						</div>

						<label
							className="pl-3 uppercase tracking-wide text-gray-700 text-xs font-bold mt-7 flex items-start justify-start"
							htmlFor="qualifications"
						>
							Qualifications
						</label>

						<div className="grid grid-cols-3 m-3">
							{qualifications.map((item) => (
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
						<input
							className="mx-3 appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="other-qualifications"
							type="text"
							placeholder="Other qualifications"
						/>
						<p className="mx-3 mt-3 text-gray-600 text-xs italic">
							If selected "Other", please indicate all the qualifications that you have
						</p>

						<label
							className="pl-3 uppercase tracking-wide text-gray-700 text-xs font-bold mt-7 flex items-start justify-start"
							htmlFor="treatment"
						>
							Treatment Aproach
						</label>
						<div className="m-3  grid grid-cols-3 max-w-lg w-full">
							{treatment.map((item) => (
								<div className="flex mb-3 items-center mr-6">
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
						<input
							className="mx-3 appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="other-treatment"
							type="text"
							placeholder="Other treatment approaches"
						/>
						<p className="mx-3 mt-3 text-gray-600 text-xs italic">
							If selected "Other", please indicate all types of treatment approaches
						</p>
						<label
							className="pl-3 uppercase tracking-wide text-gray-700 text-xs font-bold mt-7 flex items-start justify-start"
							htmlFor="treatment"
						>
							Additional Specialization
						</label>
						<input
							className="mx-3 appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="other-treatment"
							type="text"
							placeholder="Other treatment approaches"
						/>
						<p className="mx-3 mt-3 text-gray-600 text-xs italic">
							For example, art therapy, psychodrama, family therapy, EMDR or others.
							Please indicate the specialization if you have a certification of
							training of 80 hours or more.
						</p>

						<label
							className="pl-3 uppercase tracking-wide text-gray-700 text-xs font-bold mt-7 flex items-start justify-start"
							htmlFor="qualifications"
						>
							Languages you hold sessions in
						</label>

						<div className="flex m-3 max-w-lg w-full">
							{languages.map((item) => (
								<div className="flex mb-3 items-center mr-6">
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

						<label
							htmlFor="message"
							className="block m-3 text-sm font-medium text-stone-800 "
						>
							BIO{" "}
						</label>
						<textarea
							id="message"
							rows={4}
							className="block  p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-100 focus:bg-white focus:border-gray-500"
							placeholder="Please write a bio about yourself or insert a link where we can use it for your profile"
						></textarea>
					</div>

					<Upload title="Upload CV (optional)"/>
					<p className=" text-gray-600 text-xs italic">
				Please upload your CV, so that we could take information from and put on your profile 	</p>
					<Upload title="Upload photo" />
				</form>
				
			</Container>


			<div className={`bg-gray-50 w-full mt-10 border-t border-blue-300 ${hidden && "hidden"}`}>
				<Container>
					<div className="flex justify-between py-10">
						<button className="btn-secondary " disabled>Back</button>
						<Link to="/therapists/onboarding/2">
						<button className="btn-primary">Next</button>
						</Link>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Onboarding1;
