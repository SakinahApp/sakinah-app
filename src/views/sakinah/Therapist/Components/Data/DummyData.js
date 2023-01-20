const data = [
	{
		id: 1,
		name: "Salih Uddin",
		gender: "Male",
		email: "salom@alif.mobi",
		phone: +441234543134,
		tags: [
			"Anxiety",
			"Depression",
			"Anger",
			"Apathy",
			"Mood change",
			"Depression",
			"Fear",
			"Guilt",
			"Burnout",
		],
		location: "Tajikistan",
		customerNotes: [
			{
				text:
					"Hello, this is my first session and don't know where to start for this bla bla",
				date: "23 June 2019",
			},
		],
		notes: [
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Abdullah Arabi",
				note:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis sit aliquam, quia tempora eum adipisci, itaque odio, corrupti deserunt assumenda neque modi. Ut non beatae neque eos natus repellendus magni. Dignissimos laudantium iure inventore pariatur facere dolore, assumenda autem consequatur minus, quos nobis. Vitae quis minima adipisci temporibus sequi numquam, omnis minus? Soluta numquam, maxime libero ducimus, sed similique harum accusantium modi fuga quos dolorem et quo culpa nam ratione pariatur enim. Odio, eos! Iure quia at temporibus, sunt delectus blanditiis repellat alias a mollitia, beatae nobis enim quo quisquam non inventore animi quidem praesentium repudiandae exercitationem dolore obcaecati?",
			},
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Farrukh Negma",
				note:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis sit aliquam, quia tempora eum adipisci, itaque odio, corrupti deserunt assumenda neque modi. Ut non beatae neque eos natus repellendus magni. Dignissimos laudantium iure inventore pariatur facere dolore, assumenda autem consequatur minus, quos nobis. Vitae quis minima adipisci temporibus sequi numquam, omnis minus? Soluta numquam, maxime libero ducimus, sed similique harum accusantium modi fuga quos dolorem et quo culpa nam ratione pariatur enim. Odio, eos! Iure quia at temporibus, sunt delectus blanditiis repellat alias a mollitia, beatae nobis enim quo quisquam non inventore animi quidem praesentium repudiandae exercitationem dolore obcaecati? Farrukh",
			},
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Yusufi Bazi",
				note:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis sit aliquam, quia tempora eum adipisci, itaque odio, corrupti deserunt assumenda neque modi. Ut non beatae neque eos natus repellendus magni. Dignissimos laudantium iure inventore pariatur facere dolore, assumenda autem consequatur minus, quos nobis. Vitae quis minima adipisci temporibus sequi numquam, omnis minus? Soluta numquam, maxime libero ducimus, sed similique harum accusantium modi fuga quos dolorem et quo culpa nam ratione pariatur enim. Odio, eos! Iure quia at temporibus, sunt delectus blanditiis repellat alias a mollitia, beatae nobis enim quo quisquam non inventore animi quidem praesentium repudiandae exercitationem dolore obcaecati? Yusufi",
			},
		],
		upcommingSessions: [
			{
				date: "10 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
			{
				date: "20 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
			{
				date: "25 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
		],
		pastSessions: [
			{
				date: "09 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
		],
		sessionNumber: 4,
	},
	{
		id: 2,
		name: "Mohammed Salah",
		gender: "Female",
		email: "salom@alif.mobi",
		phone: +447884375315,
		tags: [
			"Anxiety",
			"Depression",
			"Anger",
			"Apathy",
			"Mood change",
			"Depression",
			"Fear",
			"Guilt",
			"Burnout",
		],
		location: "Tajikistan",
		customerNotes: [
			{
				text:
					"Hello, this is my first session and don't know where to start for this bla bla",
				date: "23 June 2019",
			},
		],
		notes: [
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Abdullah Arabi",
				note:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis sit aliquam, quia tempora eum adipisci, itaque odio, corrupti deserunt assumenda neque modi. Ut non beatae neque eos natus repellendus magni. Dignissimos laudantium iure inventore pariatur facere dolore, assumenda autem consequatur minus, quos nobis. Vitae quis minima adipisci temporibus sequi numquam, omnis minus? Soluta numquam, maxime libero ducimus, sed similique harum accusantium modi fuga quos dolorem et quo culpa nam ratione pariatur enim. Odio, eos! Iure quia at temporibus, sunt delectus blanditiis repellat alias a mollitia, beatae nobis enim quo quisquam non inventore animi quidem praesentium repudiandae exercitationem dolore obcaecati?",
			},
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Farrukh Negma",
				note:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis sit aliquam, quia tempora eum adipisci, itaque odio, corrupti deserunt assumenda neque modi. Ut non beatae neque eos natus repellendus magni. Dignissimos laudantium iure inventore pariatur facere dolore, assumenda autem consequatur minus, quos nobis. Vitae quis minima adipisci temporibus sequi numquam, omnis minus? Soluta numquam, maxime libero ducimus, sed similique harum accusantium modi fuga quos dolorem et quo culpa nam ratione pariatur enim. Odio, eos! Iure quia at temporibus, sunt delectus blanditiis repellat alias a mollitia, beatae nobis enim quo quisquam non inventore animi quidem praesentium repudiandae exercitationem dolore obcaecati? Farrukh",
			},
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Yusufi Bazi",
				note:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis sit aliquam, quia tempora eum adipisci, itaque odio, corrupti deserunt assumenda neque modi. Ut non beatae neque eos natus repellendus magni. Dignissimos laudantium iure inventore pariatur facere dolore, assumenda autem consequatur minus, quos nobis. Vitae quis minima adipisci temporibus sequi numquam, omnis minus? Soluta numquam, maxime libero ducimus, sed similique harum accusantium modi fuga quos dolorem et quo culpa nam ratione pariatur enim. Odio, eos! Iure quia at temporibus, sunt delectus blanditiis repellat alias a mollitia, beatae nobis enim quo quisquam non inventore animi quidem praesentium repudiandae exercitationem dolore obcaecati? Yusufi",
			},
		],
		upcommingSessions: [
			{
				date: "22 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
		],
		pastSessions: [
			{
				date: "09 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
		],
		sessionNumber: 7,
	},
	{
		id: 3,
		name: "Andrew Tatov",
		gender: "Male",
		email: "salom@alif.mobi",
		phone: +441234543134,
		tags: [
			"Anxiety",
			"Depression",
			"Anger",
			"Apathy",
			"Mood change",
			"Depression",
			"Fear",
			"Guilt",
			"Burnout",
		],
		location: "Tajikistan",
		customerNotes: [
			{
				text:
					"Hello, this is my first session and don't know where to start for this bla bla",
				date: "23 June 2019",
			},
		],
		notes: [
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Abdullah Arabi",
				note: "lorem250",
			},
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Farrukh Negma",
				note: "lorem250 Farrukh",
			},
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Yusufi Bazi",
				note: "lorem250 Yusufi",
			},
		],
		upcommingSessions: [
			{
				date: "15 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
		],
		pastSessions: [
			{
				date: "09 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
		],
		sessionNumber: 7,
	},
	{
		id: 6,
		name: "Hadija Uddin",
		gender: "Female",
		email: "salom@alif.mobi",
		phone: +441234543134,
		tags: [
			"Anxiety",
			"Depression",
			"Anger",
			"Apathy",
			"Mood change",
			"Depression",
			"Fear",
			"Guilt",
			"Burnout",
		],
		location: "Tajikistan",
		customerNotes: [
			{
				text:
					"Hello, this is my first session and don't know where to start for this bla bla",
				date: "23 June 2019",
			},
		],
		notes: [
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Abdullah Arabi",
				note:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis sit aliquam, quia tempora eum adipisci, itaque odio, corrupti deserunt assumenda neque modi. Ut non beatae neque eos natus repellendus magni. Dignissimos laudantium iure inventore pariatur facere dolore, assumenda autem consequatur minus, quos nobis. Vitae quis minima adipisci temporibus sequi numquam, omnis minus? Soluta numquam, maxime libero ducimus, sed similique harum accusantium modi fuga quos dolorem et quo culpa nam ratione pariatur enim. Odio, eos! Iure quia at temporibus, sunt delectus blanditiis repellat alias a mollitia, beatae nobis enim quo quisquam non inventore animi quidem praesentium repudiandae exercitationem dolore obcaecati?",
			},
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Farrukh Negma",
				note:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis sit aliquam, quia tempora eum adipisci, itaque odio, corrupti deserunt assumenda neque modi. Ut non beatae neque eos natus repellendus magni. Dignissimos laudantium iure inventore pariatur facere dolore, assumenda autem consequatur minus, quos nobis. Vitae quis minima adipisci temporibus sequi numquam, omnis minus? Soluta numquam, maxime libero ducimus, sed similique harum accusantium modi fuga quos dolorem et quo culpa nam ratione pariatur enim. Odio, eos! Iure quia at temporibus, sunt delectus blanditiis repellat alias a mollitia, beatae nobis enim quo quisquam non inventore animi quidem praesentium repudiandae exercitationem dolore obcaecati? Farrukh",
			},
			{
				id: "1stpatientnote",
				date: "12 June 2022",
				nameTherapist: "Yusufi Bazi",
				note:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis sit aliquam, quia tempora eum adipisci, itaque odio, corrupti deserunt assumenda neque modi. Ut non beatae neque eos natus repellendus magni. Dignissimos laudantium iure inventore pariatur facere dolore, assumenda autem consequatur minus, quos nobis. Vitae quis minima adipisci temporibus sequi numquam, omnis minus? Soluta numquam, maxime libero ducimus, sed similique harum accusantium modi fuga quos dolorem et quo culpa nam ratione pariatur enim. Odio, eos! Iure quia at temporibus, sunt delectus blanditiis repellat alias a mollitia, beatae nobis enim quo quisquam non inventore animi quidem praesentium repudiandae exercitationem dolore obcaecati? Yusufi",
			},
		],
		upcommingSessions: [
			{
				date: "12 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
		],
		pastSessions: [
			{
				date: "09 June 2022",
				time: "10:00 – 12:50",
				status: ["Paid", "Awaiting payment", "Cancelled"],
				paid: 65,
			},
		],
		sessionNumber: 2,
	},
];

export default data;
