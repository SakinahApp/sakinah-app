const availabilityData = [
	{
		availibility_id: "111",
		therapist_id: "11",
		enable: true,
		day: "Monday",
		working_hours: [
			{ start: "09:00", end: "13:00" },
			{ start: "14:00", end: "18:00" },
		],
	},
	{
		availibility_id: "112",
		therapist_id: "11",
		enable: true,
		day: "Tuesday",
		working_hours: [
			{ start: "09:00", end: "13:00" },
			{ start: "14:00", end: "18:00" },
		],
	},
	{
		availibility_id: "113",
		therapist_id: "11",
		enable: true,
		day: "Wednesday",
		working_hours: [
			{ start: "09:00", end: "13:00" },
			{ start: "14:00", end: "18:00" },
		],
	},
	{
		availibility_id: "114",
		therapist_id: "11",
		enable: true,
		day: "Thursday",
		working_hours: [
			{ start: "09:00", end: "13:00" },
			{ start: "14:00", end: "18:00" },
		],
	},
	{
		availibility_id: "115",
		therapist_id: "11",
		enable: true,
		day: "Friday",
		working_hours: [
			{ start: "09:00", end: "13:00" },
			{ start: "14:00", end: "18:00" },
		],
	},
	{
		availibility_id: "116",
		therapist_id: "11",
		enable: false,
		day: "Saturday",
		working_hours: [{ start: "22:22", end: "13:00" }],
	},
	{
		availibility_id: "110",
		therapist_id: "11",
		enable: false,
		day: "Sunday",
		working_hours: [{ start: "22:22", end: "13:00" }],
	},
];

export default availabilityData;

// const availabilityData = {
// 	id: "11",
// 	working_days: {
// 	Monday: {
// 	working_hours: { start: "9:00", end: "17:00" },
// 	breaks: [
// 	{ start: "12:00", end: "13:00" },
// 	{ start: "16:00", end: "17:00" },
// 	],
// 	},
// 	Tuesday: {
// 	working_hours: { start: "9:00", end: "17:00" },
// 	breaks: [{ start: "12:00", end: "13:00" }],
// 	},
// 	Wednesday: {
// 	working_hours: { start: "9:00", end: "17:00" },
// 	breaks: [{ start: "12:00", end: "13:00" }],
// 	},
// 	Thursday: {
// 	working_hours: { start: "9:00", end: "17:00" },
// 	breaks: [{ start: "12:00", end: "13:00" }],
// 	},
// 	Friday: {
// 	working_hours: { start: "9:00", end: "17:00" },
// 	breaks: [{ start: "12:00", end: "13:00" }],
// 	},
// 	Saturday: {
// 	working_hours: {},
// 	breaks: [],
// 	},
// 	Sunday: {
// 	working_hours: {},
// 	breaks: [],
// 	},
// 	},
// 	blockedDays: [],
// 	};
