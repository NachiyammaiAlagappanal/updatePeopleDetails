import { React } from 'react';
import TableData from './TableData.js';

const DisplayList = (context) => {
	const { state } = context;
	const { display } = state;

	return (
		<table className="tableStyle">
			<thead>
				<tr>
					<th>NAME </th>
					<th>AGE </th>
					<th>GENDER </th>
					<th>PHONENo. </th>
				</tr>
			</thead>
			{ display.map(TableData) }
		</table>
	);
};

export default DisplayList;
