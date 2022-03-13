const addDetails = (state) => {
	const { name, age, phoneNo, gender, display } = state;

	return [
		...display,
		{
			name,
			age,
			phoneNo,
			gender,
		},
	];
};
const displayManager = {
	addDetails,
};

export default displayManager;
