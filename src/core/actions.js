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
const addButton = (context) => ({
	display: displayManager.addDetails(context),
	name: '',
	age: '',
	phoneNo: '',
	gender: '',
});
const actions = {
	addName,
	addPhoneNo,
	addAge,
	getGender,
	addButton,
};

export default actions;
