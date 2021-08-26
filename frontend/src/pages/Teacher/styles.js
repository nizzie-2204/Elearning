import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	container: {
		marginBottom: '100px',
		padding: '50px',
		border: '1px solid #ffb607',
	},
	title: {
		fontSize: '50px',
		fontWeight: '700',
		color: '#000',
		marginBottom: '20px',
		textTransform: 'capitalize',
	},
	desc: {
		color: '#52575e',
		fontSize: '16px',
	},
});

export { useStyles };
