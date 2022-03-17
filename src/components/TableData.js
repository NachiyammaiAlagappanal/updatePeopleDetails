import { React } from 'react';

const TableData = (ele) => {
	const { id, name, age, gender, phoneNo } = ele;

	return (
		<tr
			key={ id }
			className={ gender }
		>
			<td>{ name } </td>
			<td>{ age } </td>
			<td>{ gender } </td>
			<td>{ phoneNo } </td>
		</tr>

	);
};

export default TableData;
