import { React } from 'react';
const getGender = (context) =>
	<label> Select Gender:{}
		<select
			value={ context.state.gender }
			onChange={ (evt) => context.actions.getGender(evt.target.value) }
			name="gender"
			id="Gender"
		>
			<option value="">--Please choose an option--</option>
			<option value="Male">Male</option>
			<option value="Female">Female</option>
		</select>

	</label>;

export default getGender;
