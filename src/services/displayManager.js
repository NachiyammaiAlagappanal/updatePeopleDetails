const addDetails = (state) => {
	const { name, age, phoneNo, gender, display } = state;
	const list = {
		name,
		age,
		phoneNo,
		gender,

	};

	return display.concat(list);
};

// 	return [
// 		...display,
// 		{
// 			name,
// 			age,
// 			phoneNo,
// 			gender,
// 		},
// 	];
// };
const displayManager = {
	addDetails,
};

export default displayManager;
