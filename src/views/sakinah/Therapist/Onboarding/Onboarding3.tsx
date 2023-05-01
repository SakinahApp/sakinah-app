import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Container, margin } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { allTopics } from "../Components/Data/DataTherapistProfile";
import { auth, db } from "../../../../Firebase";
import { getDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

const Questionaire3 = ({ hidden, text, prevPage, nextPage }) => {
	const [topTopics, setTopTopics] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const docRef = doc(db, "therapist-profile", auth.currentUser.uid);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setTopTopics(
						docSnap.data().top_topics !== undefined ? docSnap.data().top_topics : []
					);
				}
			} catch (error) {
				console.error("Error fetching languages:", error);
			}
		};
		fetchData();
	}, []);

	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const isChecked = target.checked;

		if (isChecked) {
			setTopTopics([...topTopics, value]);
		} else {
			setTopTopics(topTopics.filter((item) => item !== value));
		}
	};

	const handleTherapistProfileChange = async () => {
		const docRef = doc(db, "therapist-profile", auth.currentUser.uid);

		// Get the existing document data
		const docSnap = await getDoc(docRef);
		const data = docSnap.data();

		// Merge the existing data with the new data
		const newData = {
			...data,
			top_topics: topTopics,
			// Add more fields from the third page as needed
		};

		// Update the document with the merged data
		await updateDoc(docRef, newData).then(() => {
			window.alert("Changes succesfully made!"); // Open the Snackbar when the profile is successfully updated
		});
	};

	return (
		<div>
			<Container style={{ background: "white" }}>
				{/* Select up to 12 */}

				<h2 className="text-2xl mt-8 w-11/12 mb-5">
					From the topics you have chosen, choose the main requests in individual
					therapy (<span className="font-semibold">up to 15</span> )
				</h2>
				<p className="text-gray-600 w-11/12 mb-5">
					This information will be displayed for future customers on your page. These
					topics should briefly describe your line of work.
				</p>
				<div className="grid grid-cols-2 ">
					{allTopics.sort().map((item) => (
						<div className="flex mb-3 items-center" key={item}>
							<input
								id={item}
								type="checkbox"
								name="top_topics"
								value={item}
								checked={topTopics.includes(item)}
								onChange={handleInputChange}
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
					<div
						className={`flex py-10 ${hidden ? "justify-center" : "justify-between"}`}
					>
						<Link to={prevPage} className={`${hidden && "hidden"}`}>
							<button className={`btn-secondary ${hidden && "hidden"}`}>Back</button>
						</Link>
						<Link to={nextPage}>
							<button className="btn-primary" onClick={handleTherapistProfileChange}>
								{text}
							</button>
						</Link>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Questionaire3;
