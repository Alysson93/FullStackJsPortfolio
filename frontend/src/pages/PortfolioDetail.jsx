import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

export default function PortfolioDetail() {

	const { slug } = useParams();
	const { data } = useApi(`/api/portfolio/${slug}`);

	return (

		<section>
			<h1>{data?.portfolio?.title}</h1>
			<h3>{data?.portfolio?.description}</h3>
			<img src={data?.portfolio?.image} alt="imagem" />
			<p>{data?.portfolio?.text}</p>
		</section>

	);

}