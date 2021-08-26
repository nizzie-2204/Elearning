import { Container, Typography } from '@material-ui/core';
import About from 'components/Homepage/About/About';
import Breadcrumb from 'components/Homepage/Breadcrumb/Breadcrumb';
import Footer from 'components/Homepage/Footer/Footer';
import Header from 'components/Homepage/Header/Header';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import { useStyles } from './styles';

const Teacher = () => {
	const links = [
		{
			title: 'Trang chủ',
			path: '/',
		},
		{
			title: 'Giới thiệu',
			path: '/teacher',
		},
		{
			title: 'Đội ngũ giáo viên',
			path: '/teacher',
		},
	];
	const classes = useStyles();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Đội ngũ giáo viên - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Header />
			<Breadcrumb links={links} />
			<About />
			<div>
				<Fade bottom cascade>
					<Container maxWidth="lg" className={classes.container}>
						<Typography
							variant="body2"
							component="h3"
							className={classes.title}
						>
							Đội ngũ giáo viên
						</Typography>
						<Typography className={classes.desc} variant="body2" component="p">
							Nó đến từ đâu?
						</Typography>
						<Typography className={classes.desc} variant="body2" component="p">
							Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ
							là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó
							từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45
							trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một
							giáo sư của trường Hampden-Sydney College (bang Virginia – Mỹ)
							quan tâm tới một trong những từ la-tinh khó hiểu nhất,
							“consectetur”, trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu
							tất cả các ứng dụng của từ này trong văn học cổ điển,
						</Typography>
						<Typography className={classes.desc} variant="body2" component="p">
							để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum. Thật
							ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của “De
							Finibus Bonorum et Malorum” (Đỉnh tối thượng của Cái Tốt và Cái
							Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này
							là một luận thuyết đạo lí rất phổ biến trong thời kì Phục Hưng.
							Dòng đầu tiên của Lorem Ipsum, “Lorem ipsum dolor sit amet…” được
							trích từ một câu trong đoạn thứ 1.10.32.
						</Typography>
						<Typography className={classes.desc} variant="body2" component="p">
							Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế kỉ thứ 16 và
							được tái bản sau đó cho những người quan tâm đến nó. Đoạn 1.10.32
							và 1.10.33 trong cuốn “De Finibus Bonorum et Malorum” của Cicero
							cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản
							tiếng Anh được dịch bởi H. Rackham vào năm 19.L thế nào để có nó?
						</Typography>
						<Typography className={classes.desc} variant="body2" component="p">
							Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy,
							nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các
							từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử
							dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là
							không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các
							công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách
							lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho
							lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất
							trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần
							thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ
							thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không
							cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm
							hỉnh hay thiếu trật tự.
						</Typography>
					</Container>
				</Fade>
			</div>
			<Footer />
		</>
	);
};

export default Teacher;
