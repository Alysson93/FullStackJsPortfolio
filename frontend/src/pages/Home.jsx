import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

export default function Home() {

	return (
		<motion.div 
			initial='hidden'
			animate='show'
			exit='exit'
			variants={pageAnimation}
		>
			<HomeSection />
			<ServicesSection />
			<ScrollTop />
		</motion.div>
	);

}