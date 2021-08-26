import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	testimonial: {
		backgroundColor: '#f8f8f8',
		padding: '40px 0',
	},
	testimonialTitle: {
		width: '100%',
		fontSize: '48px',
		fontWeight: '700',
		textAlign: 'center',
		color: '#000',
		marginBottom: '60px',
	},
	testimonialItem: {
		display: 'flex',
		alignItems: 'center',
	},
	testimonialImageContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
	},
	testimonialImage: {
		width: '145px',
		height: '145px',
		objectFit: 'cover',
		borderRadius: '50%',
		[theme.breakpoints.down('xs')]: {
			width: '450px',
			height: '450px',
		},
	},
	testimonialDesc: {
		height: '100%',
		display: 'flex',
		transition: '0.2s',
		alignItems: 'center',
	},
	itemInfoTitle: {
		marginBottom: '10px',
		textAlign: 'center',
		transition: '0.2s',
	},
	itemInfoSubtitle: {
		fontSize: '15px',
		textAlign: 'center',
	},
	testimonialGrid: {
		marginBottom: '40px',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},

		'&:hover': {
			'& $itemInfoTitle': {
				color: '#ffb607',
			},
			'& $testimonialDesc': {
				transform: 'translateY(-10px)',
			},
		},
	},
}));

export { useStyles };
