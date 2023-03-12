import { useApi } from '../hooks/useApi';
import { Link } from  'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

export default function Portfolio() {

	const { data } = useApi('/api/portfolio');

	return (

		<motion.div 
			initial='hidden'
			animate='show'
			exit='exit'
			variants={pageAnimation}
		>
			<h1>Portfólio</h1>
			{data?.portfolio?.map(project => {
				return (
					<Link to={`/portfolio/${project.slug}`} key={project._id}>
						<div>
							<h3>{project.title}</h3>
							<img src={project.image} alt="Imagem do projeto" width="400" />
							<br />
							<small>{/*new Intl.DateTimeFormat('pt-BR').format(project.created_at)*/project.created_at}</small>
							<h4>{project.description}</h4>
							<p>{project.text}</p>
							<hr />
						</div>
					</Link>
				);
			})}
			<ScrollTop />
		</motion.div>
	);

}