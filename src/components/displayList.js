import { React } from 'react';
import context from '../core/context';
import element from './element.js';

const tableStyle = {
	padding: '15px',
	position: 'absolute',
	border: '2px solid black',
	left: '600px',
	top: '150px',
};

const DisplayList = () =>

	<table style={ tableStyle }>
		<tr>
			<th>NAME </th>
			<th>AGE </th>
			<th>GENDER </th>
			<th>PHONENo. </th>
		</tr>
		{ context.state.display.map(element) }
	</table>;

export default DisplayList;
