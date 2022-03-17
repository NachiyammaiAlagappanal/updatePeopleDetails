import { React } from 'react';

const getAge = (context) =>
	<label> Enter Age:{}
		<input
			type="number"
			value={ context.state.age }
			onChange={ (evt) => context.actions.addAge(evt.target.value) }
		/>
	</label>;

export default getAge;
