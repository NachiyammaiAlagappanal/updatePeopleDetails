/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import getName from './components/getName.js';
import getAge from './components/getAge.js';
import getPhoneNo from './components/getPhoneNo.js';
import getGender from './components/getGender.js';
import addButton from './components/addButton.js';
import DisplayList from './components/displayList';

const App = (context) => {
	// eslint-disable-next-line react/destructuring-assignment
	console.log(context.state);

	return (
		<div className="App" role="App">
			<div>{ getName(context) }</div>
			<div>{ getPhoneNo(context) }</div>
			<div>{ getAge(context) }</div>
			<div>{ getGender(context) }</div>
			<div>{	addButton(context) }</div>
			<div>{	DisplayList() }</div>
		</div>
	);
};

export default App;
