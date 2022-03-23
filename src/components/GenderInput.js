import { React } from 'react';

const Options = (data, i) =>
	<option key={ i } value={ data }>{ data }</option>;

const GenderInput = (context) => {
	const { config } = context;
	const { Gender } = config;
	const { state } = context;

	return (
		<select
			value={ state.gender }
			onChange={ (evt) => context.actions.getGender(evt.target.value) }
			name="gender"
			id="Gender"
		>
			{	Gender.map(Options) }
		</select>
	);
};

export default GenderInput;
