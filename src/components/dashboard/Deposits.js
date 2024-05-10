import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../dashboard/Title';

function preventDefault(event) {
	event.preventDefault();
}

const Deposits = ({hours}) => {
	return (
		<React.Fragment>
			<Title>Hours</Title>
			<Typography component="p" variant="h4">
				{hours} Hrs
			</Typography>
			<Typography color="text.primary" sx={{ flex: 1 }}>
				{new Date().toLocaleDateString()}
			</Typography>
			<div>
				<Link color="primary" href="#" onClick={preventDefault}>
					View balance
				</Link>
			</div>
		</React.Fragment>
	);
}

export default Deposits;