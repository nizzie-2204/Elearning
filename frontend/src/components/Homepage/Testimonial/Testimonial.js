import { Container, Grid, Typography } from '@material-ui/core';
import image1 from 'assets/images/si-hoang_1.jpg';
import image3 from 'assets/images/kim-dung.jpg';
import image2 from 'assets/images/thanh-dien.jpg';
import React from 'react';
import { useStyles } from './styles';
import Fade from 'react-reveal/Fade';

const Testimonial = () => {
	const classes = useStyles();

	return (
		<div className={classes.testimonial}>
			<Fade bottom cascade>
				<Container maxWidth="xl">
					<Grid container>
						<Typography className={classes.testimonialTitle} variant="h2">
							Phụ Huynh Nói Gì
						</Typography>
						<Grid
							item
							container
							className={classes.testimonialGrid}
							spacing={4}
						>
							<Grid item sm={2}>
								<div className={classes.testimonialImageContainer}>
									<img
										src={image1}
										alt="parents"
										className={classes.testimonialImage}
									/>
								</div>
							</Grid>
							<Grid item sm={8}>
								<div className={classes.testimonialDesc}>
									<div className={classes.itemInfo}>
										<Typography variant="h6" className={classes.itemInfoTitle}>
											Anh Nhựt Tân.Thạc sỹ Nghệ Thuật,Nhà thiết kế thời trang
											<br />
											Phụ huynh bé Tâm
										</Typography>
										<Typography
											variant="body2"
											className={classes.itemInfoSubtitle}
										>
											Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ
											đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
											vào yếu tố
											<br />
											trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn
											văn bản chỉ gồm
										</Typography>
									</div>
								</div>
							</Grid>
						</Grid>

						<Grid
							item
							container
							className={classes.testimonialGrid}
							spacing={4}
						>
							<Grid item md={3} sm={2}>
								<div className={classes.testimonialImageContainer}>
									<img
										src={image2}
										alt="parents"
										className={classes.testimonialImage}
									/>
								</div>
							</Grid>
							<Grid item sm={8}>
								<div className={classes.testimonialDesc}>
									<div className={classes.itemInfo}>
										<Typography variant="h6" className={classes.itemInfoTitle}>
											Anh Nhựt Tân.Thạc sỹ Nghệ Thuật,Nhà thiết kế thời trang
											<br />
											Phụ huynh bé Tâm
										</Typography>
										<Typography
											variant="body2"
											className={classes.itemInfoSubtitle}
										>
											Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ
											đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
											vào yếu tố
											<br />
											trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn
											văn bản chỉ gồm
										</Typography>
									</div>
								</div>
							</Grid>
						</Grid>

						<Grid
							item
							container
							className={classes.testimonialGrid}
							spacing={4}
						>
							<Grid item md={4} sm={2}>
								<div className={classes.testimonialImageContainer}>
									<img
										src={image3}
										alt="parents"
										className={classes.testimonialImage}
									/>
								</div>
							</Grid>
							<Grid item sm={8}>
								<div className={classes.testimonialDesc}>
									<div className={classes.itemInfo}>
										<Typography variant="h6" className={classes.itemInfoTitle}>
											Anh Nhựt Tân.Thạc sỹ Nghệ Thuật,Nhà thiết kế thời trang
											<br />
											Phụ huynh bé Tâm
										</Typography>
										<Typography
											variant="body2"
											className={classes.itemInfoSubtitle}
										>
											Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ
											đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
											vào yếu tố
											<br />
											trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn
											văn bản chỉ gồm
										</Typography>
									</div>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Fade>
		</div>
	);
};

export default Testimonial;
