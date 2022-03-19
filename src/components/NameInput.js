import { React } from 'react';

const NameInput = (context) => {
	const { state } = context;
	const { name } = state;

	return (
		<input
			value={ name }
			onChange={ (evt) => context.actions.addName(evt.target.value) }
		/>
	);
};

export default NameInput;
