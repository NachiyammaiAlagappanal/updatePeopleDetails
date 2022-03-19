import { React } from 'react';

const getPhoneNo = (context) => {
	const { state } = context;
	const { phoneNo } = state;

	return (
		<input
			type="number"
			value={ phoneNo }
			onChange={ (evt) => context.actions.addPhoneNo(evt.target.value) }
		/>
	);
};

export default getPhoneNo;
