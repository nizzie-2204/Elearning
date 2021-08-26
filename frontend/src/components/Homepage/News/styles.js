import { makeStyles } from '@material-ui/styles';
import bgImage from 'assets/images/choice-bg.jpg';

const useStyles = makeStyles((theme) => ({
	news: {
		padding: '40px 0',
		backgroundColor: '#f8f8f8',
	},
	newsTitle: {
		width: '100%',
		fontSize: '48px',
		fontWeight: '700',
		textAlign: 'center',
		color: theme.palette.text.main,
		marginBottom: '60px',
	},
	root: {
		maxWidth: 345,
		height: '100%',
		textDecoration: 'none',
		position: 'relative',
		boxShadow: '0',
		border: '0',
		overflow: 'hidden',

		'&::before, &::after': {
			position: 'absolute',
			content: "''",
			width: '10%',
			height: '10%',
			backgroundColor: 'transparent',
			border: '2px solid #ffb607',
			transition: 'all 0.4s cubic-bezier(.25,.8,.25,1)',
		},
		'&::before': {
			top: '0',
			left: '0',
			borderBottom: 'none',
			borderRight: 'none',
		},
		'&::after': {
			bottom: '0',
			right: '0',
			borderTop: 'none',
			borderLeft: 'none',
		},
		'&:hover': {
			'&::before, &::after': {
				width: '100%',
				height: '100%',
			},
			// "& $media": {
			// 	transform: "scale3d(1.05, 1.05, 1)",
			// },
		},
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
		transition: '0.2s',
		overflow: 'hidden',
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	gridItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '20px',
		},
	},
	cardTitle: {
		color: theme.palette.text.main,
		fontSize: '20px',
		marginBottom: '10px',
	},
	cardSubtitle: {
		color: theme.palette.text.primary,
		fontSize: '12px',
		marginBottom: '20px',
		display: 'block',
	},
	cardDesc: {
		color: '#353535',
		fontSize: '14px',
	},
}));

export { useStyles };
