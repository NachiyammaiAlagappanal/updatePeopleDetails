import { React } from 'react';

const TableData = (ele) => {
	const { id, name, age, gender, phoneNo } = ele;

	return (
		<tbody 	key={ id }>
			<tr
				className={ gender }
			>
				<td>{ name } </td>
				<td>{ age } </td>
				<td>{ gender } </td>
				<td>{ phoneNo } </td>
			</tr>
		</tbody>

	);
};

export default TableData;
