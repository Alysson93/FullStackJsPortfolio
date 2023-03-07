import { useApi } from '../hooks/useApi';
import { Link } from  'react-router-dom';

export default function Portfolio() {

	const { data } = useApi('/api/portfolio');

	return (

		<>
			<h1>Portfólio</h1>
			{data?.portfolio?.map(project => {
				return (
					<Link to={`/portfolio/${project.slug}`}>
						<div key={project._id}>
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
		</>
	);

}