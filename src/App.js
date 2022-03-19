/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import NameInput from './components/NameInput.js';
import AgeInput from './components/AgeInput.js';
import PhoneNoInput from './components/PhoneNoInput.js';
import GenderInput from './components/GenderInput.js';
import addButton from './components/addButton.js';
import DisplayList from './components/displayList';

const App = (context) => {
	// eslint-disable-next-line react/destructuring-assignment
	console.log(context.state);

	return (
		<div className="App" role="App">
			<div>ENTER NAME:{ NameInput(context) }</div>
			<div>ENTER PHONENO: { PhoneNoInput(context) }</div>
			<div>ENTER AGE:{ AgeInput(context) }</div>
			<div>SELECT GENDER:{ GenderInput(context) }</div>
			<div>{	addButton(context) }</div>
			<div>{	DisplayList() }</div>
		</div>
	);
};

export default App;
