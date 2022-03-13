import { React } from 'react';
const getName = (context) =>
	<label> Enter Name:{}
		<input
			value={ context.state.name }
			onChange={ (evt) => context.actions.addName(evt.target.value) }
		/>
	</label>;

export default getName;
