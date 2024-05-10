import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Dashboard = ({hoursUsed}) => {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{display: 'flex'}}>
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'light'
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: '100vh',
					}}
				>
					<Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
						<Grid container spacing={3}>
							{/* Chart */}
							<Grid item xs={12} md={8} lg={9}>
								<Paper
									sx={{
										p: 2,
										display: 'flex',
										flexDirection: 'column',
										height: 320,
									}}
								>
									<Chart/>
								</Paper>
							</Grid>
							{/* Recent Deposits */}
							<Grid item xs={12} md={4} lg={3}>
								<Paper
									sx={{
										p: 2,
										display: 'flex',
										flexDirection: 'column',
										height: 320,
									}}
								>
									<Deposits
									hours={hoursUsed}/>
								</Paper>
							</Grid>
							{/* Recent Orders */}
							<Grid item xs={12}>
								<Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
									<Orders/>
								</Paper>
							</Grid>
						</Grid>
						{/*<Copyright sx={{ pt: 4 }} />*/}
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default Dashboard;