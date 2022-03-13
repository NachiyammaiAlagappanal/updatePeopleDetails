import displayManager from '../services/displayManager.js';
const addName = ({ data }) => ({
	name:	data,
});

const addPhoneNo = ({ data }) => ({
	phoneNo: data,
});

const addAge = ({ data }) => ({
	age:	data,
});
const getGender = ({ data }) => ({
	gender:	data,
});
const addButton = ({ state }) => ({
	display: displayManager.addDetails(state),
});
const actions = {
	addName,
	addPhoneNo,
	addAge,
	getGender,
	addButton,
};

export default actions;
