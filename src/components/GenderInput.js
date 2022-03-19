import { React } from 'react';
import context from '../core/context.js';

const { config } = context;
const { Gender } = config;

const Options = (data) =>
	<option value={ data }>{ data }</option>;

const GenderInput = () =>
	<select
		value={ context.state.gender }
		onChange={ (evt) => context.actions.getGender(evt.target.value) }
		name="gender"
		id="Gender"
	>
		{	Gender.map(Options) }
	</select>;

export default GenderInput;
