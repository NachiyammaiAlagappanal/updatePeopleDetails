import { React } from 'react';
const getPhoneNo = (context) =>
	<label> Enter phoneNo:{}
		<input
			value={ context.state.phoneNo }
			onChange={ (evt) => context.actions.addPhoneNo(evt.target.value) }
		/>
	</label>;

export default getPhoneNo;
