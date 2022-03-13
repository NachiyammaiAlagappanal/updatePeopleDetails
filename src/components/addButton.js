import { React } from 'react';
const addButton = (context) =>
	<button
		onClick={ () => context.actions.addButton() }
	>ADD!
	</button>;

export default addButton;
