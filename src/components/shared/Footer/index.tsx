import { Box, Grid } from '@mui/material';

function Footer() {
	return (
		<Grid
			container
			sx={{ backgroundColor: 'primary.main', color: '#fff', p: 5 }}
		>
			<Grid sx={{ backgroundColor: 'red' }} item xs={2}>
				Logo
			</Grid>
			<Grid item>
				<ul>
					Links
					<li>Link1</li>
					<li>Link1</li>
					<li>Link1</li>
				</ul>
			</Grid>
		</Grid>
	);
}

export default Footer;
