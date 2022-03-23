import { rndString } from '@laufire/utils/random';

const addDetails = ({ state, config }) => {
	const { name, age, phoneNo, gender, display } = state;
	const id = rndString(config.idLength);

	const list = {
		id,
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
