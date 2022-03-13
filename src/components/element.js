/* eslint-disable max-lines-per-function */
import { React } from 'react';
const colour = (ele) => {
	if(ele.gender === 'Male')
		return true;
};
const Element = (ele) => {
	const { id, name, age, gender, phoneNo } = ele;

	return (
		<tr key={ id }>
			<td>{ name } </td>
			<td>{ age } </td>
			<td style={ {
				backgroundColor: colour(ele) ? 'blue' : 'pink',
			} }

			>{ gender } </td>
			<td>{ phoneNo } </td>
		</tr>

	);
};

export default Element;
