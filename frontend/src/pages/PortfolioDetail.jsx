import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

export default function PortfolioDetail() {

	const { slug } = useParams();
	const { data } = useApi(`/api/portfolio/${slug}`);

	return (

		<motion.div 
			initial='hidden'
			animate='show'
			exit='exit'
			variants={pageAnimation}
		>
			<h1>{data?.portfolio?.title}</h1>
			<h3>{data?.portfolio?.description}</h3>
			<img src={data?.portfolio?.image} alt="imagem" />
			<p>{data?.portfolio?.text}</p>
			<ScrollTop />
		</motion.div>

	);

}