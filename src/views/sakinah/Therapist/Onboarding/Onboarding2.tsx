import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useLocation, useNavigate } from "react-router-dom";
import CheckboxesGroup from "../../User/Components/CheckboxesGroup";
import { db, auth } from "../../../../Firebase";
import { updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import {
	feelings,
	behaviour,
	habits,
	self,
	relationship,
	selfDevelopment,
	experiences,
	couples,
} from "../Components/Data/DataTherapistProfile";

const styling = {
	borderRadius: 10,
	margin: "20px 10px",
	padding: "10px 30px",
};

const Onboarding2 = ({ hidden, text, prevPage, nextPage }) => {
	const [preferences, setPreferences] = React.useState([]);
	const [priceIndividuals, setPriceIndividuals] = useState(null);
	const [priceCouples, setPriceCouples] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const docRef = doc(db, "therapist-profile", auth.currentUser.uid);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setPreferences(
						docSnap.data().topics !== undefined ? docSnap.data().topics : []
					);
					setPriceIndividuals(
						docSnap.data().price_individuals !== undefined
							? docSnap.data().price_individuals
							: []
					);
					setPriceCouples(
						docSnap.data().price_couples !== undefined
							? docSnap.data().price_couples
							: []
					);
				}
			} catch (error) {
				console.error("Error fetching languages:", error);
			}
		};
		fetchData();
	}, [setPreferences, setPriceIndividuals, setPriceCouples]);

	const handleTherapistProfileChange = async () => {
		const docRef = doc(db, "therapist-profile", auth.currentUser.uid);

		// Get the existing document data
		const docSnap = await getDoc(docRef);
		const data = docSnap.data();

		// Merge the existing data with the new data
		const newData = {
			...data,
			topics: preferences,
			price_individuals: priceIndividuals,
			price_couples: priceCouples,
			// Add more fields from the third page as needed
		};

		// Update the document with the merged data
		await updateDoc(docRef, newData).then(() => {
			window.alert("Changes succesfully made!"); // Open the Snackbar when the profile is successfully updated
		});
	};

	return (
		<Container>
			<CssBaseline />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h2 style={{ fontSize: "3rem", margin: "3rem 0 2rem 0" }}>
					Select topics you work with{" "}
					<span className="text-blue-400">individuals </span>
				</h2>

				<Grid container spacing={2} sx={{ mt: 1 }}>
					<Grid item xs={12} sm={6} style={styling}>
						<CheckboxesGroup
							data={feelings}
							preferences={preferences}
							setPreferences={setPreferences}
							title="Feelings and emotions, complex experiences and states"
						/>
					</Grid>
					<Grid item xs={12} sm={6} style={styling}>
						<CheckboxesGroup
							data={behaviour}
							preferences={preferences}
							setPreferences={setPreferences}
							title="Behavior and thoughts, uncontrollable actions"
						/>
					</Grid>
					<Grid item xs={12} sm={6} style={styling}>
						<CheckboxesGroup
							data={habits}
							preferences={preferences}
							setPreferences={setPreferences}
							title="Bad habits and addictions"
						/>
					</Grid>
					<Grid item xs={12} sm={6} style={styling}>
						<CheckboxesGroup
							data={self}
							preferences={preferences}
							setPreferences={setPreferences}
							title="Self-relationships, self-esteem, psychosomatics"
						/>
					</Grid>
					<Grid item xs={12} sm={6} style={styling}>
						<CheckboxesGroup
							data={relationship}
							preferences={preferences}
							setPreferences={setPreferences}
							title="Relationships, intimacy, family, sex"
						/>
					</Grid>
					<Grid item xs={12} sm={6} style={styling}>
						<CheckboxesGroup
							data={selfDevelopment}
							preferences={preferences}
							setPreferences={setPreferences}
							title="Self-development and changing living conditions"
						/>
					</Grid>
					<Grid item xs={12} sm={6} style={styling}>
						<CheckboxesGroup
							data={experiences}
							preferences={preferences}
							setPreferences={setPreferences}
							title="Difficult experiences and states"
						/>
					</Grid>
					<Grid item xs={12} sm={6} style={styling}>
						<CheckboxesGroup
							data={couples}
							preferences={preferences}
							setPreferences={setPreferences}
							title="Select topics you work with couples"
						/>
					</Grid>
				</Grid>
			</Box>
			<div className="flex justify-between mt-10">
				<div className="w-max border rounded-xl border-stone-400 flex flex-col">
					<h3 className="mx-3 mt-3">Price of individual session per 50 mins</h3>

					<input
						type="number"
						name="price_individuals"
						className="border rounded-xl h-8 pl-2 w-10/12 mx-auto my-3"
						value={priceIndividuals}
						onChange={(e) => setPriceIndividuals(e.target.value)}
						required
						placeholder="£"
					/>
				</div>
				<div className="w-max border rounded-xl border-stone-400 flex flex-col">
					<h3 className="mx-3 mt-3">Price of couples session per 1.5h</h3>
					<input
						type="number"
						name="price_couples"
						className="border rounded-xl h-8 pl-2 w-10/12 mx-auto my-3"
						required
						value={priceCouples}
						onChange={(e) => setPriceCouples(e.target.value)}
						placeholder="£"
					/>
				</div>
			</div>

			<div className={`bg-gray-50 w-full mt-10 border-t border-blue-300`}>
				<div
					className={`flex py-10 ${hidden ? "justify-center" : "justify-between"}`}
				>
					<Link to={prevPage} className={`${hidden && "hidden"}`}>
						<button className="btn-secondary">Back</button>
					</Link>
					<Link to={nextPage}>
						<button className="btn-primary r" onClick={handleTherapistProfileChange}>
							{text}
						</button>
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default Onboarding2;
