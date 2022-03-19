import { React } from 'react';

const AgeInput = (context) => {
	const { state } = context;
	const { age } = state;

	return (
		<input
			type="number"
			value={ age }
			onChange={ (evt) => context.actions.addAge(evt.target.value) }
		/>
	);
};

export default AgeInput;
