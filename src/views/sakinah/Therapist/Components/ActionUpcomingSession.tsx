import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import RedoIcon from "@mui/icons-material/Redo";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,

	bgcolor: "background.paper",
	border: "0px solid #000",
	boxShadow: 24,
	p: 4,
};

const modals = [
	{
		id: "late",
		title: "Are you running late?",
		text:
			"We will inform the patient that you are running late and they will be waiting for you",
		tooltip: "Inform the client that you are running late",
	},
	{
		id: "reschedule",
		title: "Do you want to request to reschedule the session?",
		text:
			"Patient will receive a request to reschedule the session and will chose your calendar suitable day",
		tooltip: "Request to reschedule the session",
	},
	{
		id: "cancel",
		title: "Do you want to cancel this session?",
		text: "We will cancel this session and inform the patient",
		tooltip: "Cancel this session",
	},
];

export default function AcctionUpcomingSession() {
	// const [open, setOpen] = React.useState(false);
	const [modalId, setModalId] = React.useState("");

	const handleOpen = (id) => setModalId(id);
	const handleClose = () => setModalId("");

	return (
		<div>
			{modals.map((modal) => (
				<div className="flex" key={modal.id}>
					<Tooltip title={modal.tooltip}>
						<IconButton>
							{modal.id === "late" ? (
								<AssignmentLateOutlinedIcon onClick={() => handleOpen(modal.id)} />
							) : modal.id === "reschedule" ? (
								<RedoIcon onClick={() => handleOpen(modal.id)} />
							) : modal.id === "cancel" ? (
								<ClearIcon onClick={() => handleOpen(modal.id)} />
							) : null}
						</IconButton>
					</Tooltip>
					<Modal
						open={modalId === modal.id}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								{modal.title}
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								{modal.text}
							</Typography>
							<div className="mt-3 pt-3 ">
								<button className="btn-secondary" onClick={handleClose}>
									Cancel
								</button>
								<button className="btn-primary" id={modal.id}>
									Proceed
								</button>
							</div>
						</Box>
					</Modal>
				</div>
			))}
		</div>
	);
}
