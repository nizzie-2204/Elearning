import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	container: {
		padding: '100px 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	grid: {},
	gridItem: {
		marginBottom: '50px',
	},
	card: {
		width: '80%',
		margin: '0 auto',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingTop: '20px',
		boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
		transition: 'all 0.1s cubic-bezier(.25,.8,.25,1)',
		' &:hover': {
			boxShadow: ' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
		},
	},
	cardHeader: {
		width: '130px',
		height: '130px',
		borderRadius: '50%',
		background: '#3ab64c',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '20px',
	},
	cardMedia: {
		maxWidth: '75px',
		maxHeight: '75px',
		objectFit: 'cover',
	},
	cartTitle: {
		fontSize: '24px',
		fontWeight: '700',
		color: '#000',
		textAlign: 'center',
		position: 'relative',
		marginBottom: '20px',
		'&::before': {
			position: 'absolute',
			content: "''",
			bottom: '-10px',
			left: '50%',
			transform: 'translate(-50%)',
			width: '50px',
			height: '2px',
			backgroundColor: '#fff',
		},
	},
	cartSubtitle: {
		fontSize: '16px',
		color: '#000',
		textAlign: 'center',
	},
	title: {
		textTransform: 'capitalize',
		width: '100%',
		fontSize: '48px',
		fontWeight: '700',
		textAlign: 'center',
		color: '#000',
		marginBottom: '60px',
	},
});

export { useStyles };
