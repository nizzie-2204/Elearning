import {
	List,
	ListItemText,
	Typography,
	Drawer,
	IconButton,
	ListItemIcon,
	Collapse,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import MuiListItem from '@material-ui/core/ListItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useStyles } from './styles';

const ListItem = withStyles({
	root: {
		color: '#393d72',
		transition: '0.2s',
		'&:hover': {
			boxShadow: 'none',
			backgroundColor: '#ffb607',
		},
	},
})(MuiListItem);

const ListItemDropdown = withStyles({
	root: {
		color: '#393d72',
		cursor: 'pointer',
		padding: '6px 0',
		'&:hover': {
			boxShadow: 'none',
			backgroundColor: '#ffb607',
			color: '#fff',
		},
	},
})(MuiListItem);

const DrawerComponent = () => {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	const handleClick2 = () => {
		setOpen2(!open2);
	};

	return (
		<>
			<IconButton onClick={handleDrawerToggle} style={{ marginLeft: 'auto' }}>
				<MenuIcon />
			</IconButton>
			<Drawer
				className={classes.drawer}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
			>
				<List component="nav" className={classes.nav}>
					<IconButton
						className={classes.iconClose}
						onClick={handleDrawerToggle}
						style={{ marginLeft: 'auto' }}
					>
						<CloseIcon />
					</IconButton>
					<ListItem component={RouterLink} to="/" className={classes.navItem}>
						<ListItemText
							disableTypography
							primary={
								<Typography type="body2" className={classes.navItemText}>
									Trang ch???
								</Typography>
							}
						></ListItemText>
					</ListItem>

					<ListItem
						component={RouterLink}
						to="/teacher"
						className={`${classes.navItem} ${classes.navItemDropdown}`}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								width: '100%',
							}}
						>
							<ListItemText
								disableTypography
								primary={
									<Typography type="body2" className={classes.navItemText}>
										Gi???i thi???u
									</Typography>
								}
							></ListItemText>
							<ListItemIcon>
								<ExpandMoreIcon
									style={{ color: '#000', marginLeft: 'auto' }}
									onClick={handleClick}
								/>
							</ListItemIcon>
						</div>
					</ListItem>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemDropdown component={RouterLink} to="/teacher">
								<ListItemText
									disableTypography
									primary={
										<Typography
											type="body2"
											className={classes.navItemTextDropdown}
										>
											?????i ng?? gi??o vi??n
										</Typography>
									}
								></ListItemText>
							</ListItemDropdown>

							<ListItemDropdown component={RouterLink} to="/vision">
								<ListItemText
									disableTypography
									primary={
										<Typography
											type="body2"
											className={classes.navItemTextDropdown}
										>
											T???m nh??n v?? s??? m???nh
										</Typography>
									}
								></ListItemText>
							</ListItemDropdown>
						</List>
					</Collapse>

					<ListItem
						component={RouterLink}
						to="/programs"
						className={`${classes.navItem} ${classes.navItemDropdown}`}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								width: '100%',
							}}
						>
							<ListItemText
								disableTypography
								primary={
									<Typography type="body2" className={classes.navItemText}>
										Ch????ng tr??nh
									</Typography>
								}
							></ListItemText>
							<ListItemIcon>
								<ExpandMoreIcon
									style={{ color: '#000', marginLeft: 'auto' }}
									onClick={handleClick2}
								/>
							</ListItemIcon>
						</div>
					</ListItem>
					<Collapse in={open2} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemDropdown component={RouterLink} to="/programs">
								<ListItemText
									disableTypography
									primary={
										<Typography
											type="body2"
											className={classes.navItemTextDropdown}
										>
											T?? v???n gi??o d???c
										</Typography>
									}
								></ListItemText>
							</ListItemDropdown>
							<ListItemDropdown component={RouterLink} to="/programs">
								<ListItemText
									disableTypography
									primary={
										<Typography
											type="body2"
											className={classes.navItemTextDropdown}
										>
											Ch????ng tr??nh gi??o d???c
										</Typography>
									}
								></ListItemText>
							</ListItemDropdown>
							<ListItemDropdown component={RouterLink} to="/programs">
								<ListItemText
									disableTypography
									primary={
										<Typography
											type="body2"
											className={classes.navItemTextDropdown}
										>
											Ph????ng ph??p gi??o d???c
										</Typography>
									}
								></ListItemText>
							</ListItemDropdown>
						</List>
					</Collapse>

					<ListItem component={RouterLink} to="/" className={classes.navItem}>
						<ListItemText
							disableTypography
							primary={
								<Typography type="body2" className={classes.navItemText}>
									Tuy???n sinh
								</Typography>
							}
						></ListItemText>
					</ListItem>
					<ListItem component={RouterLink} to="/" className={classes.navItem}>
						<ListItemText
							disableTypography
							primary={
								<Typography type="body2" className={classes.navItemText}>
									Li??n h???
								</Typography>
							}
						></ListItemText>
					</ListItem>
					<ListItem component={RouterLink} to="/" className={classes.navItem}>
						<ListItemText
							disableTypography
							primary={
								<Typography type="body2" className={classes.navItemText}>
									????ng nh???p
								</Typography>
							}
						></ListItemText>
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};

export default DrawerComponent;
