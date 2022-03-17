import { React } from 'react';

const Options = (data) =>
	<option value={ data }>{ data }</option>;

const getGender = (context) =>
	<label> Select Gender:{}
		<select
			value={ context.state.gender }
			onChange={ (evt) => context.actions.getGender(evt.target.value) }
			name="gender"
			id="Gender"
		>
			{	context.config.gender.map(Options) }
		</select>

	</label>;

export default getGender;
