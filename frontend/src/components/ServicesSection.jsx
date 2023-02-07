import { FaLaptopCode, FaGraduationCap, FaImages, FaGithubSquare } from 'react-icons/fa';

export default function ServicesSection() {

	return (

		<section>
			<div className="center section flex flex-between">
				<div>
					<div>
						<FaLaptopCode />
						<h3>Portfólio</h3>
					</div>
					<p>Uma breve descrição</p>
				</div>
				<div>
					<div>
						<FaGraduationCap />
						<h3>Cursos</h3>
					</div>						
					<p>Uma breve descrição</p>
				</div>
				<div>
					<div>
						<FaImages />
						<h3>Hobbies</h3>
					</div>
					<p>Uma breve descrição</p>
				</div>
				<div>
					<div>
						<FaGithubSquare />
						<h3>Github</h3>
					</div>
					<p>Uma breve descrição</p>
				</div>
			</div>
		</section>

	);

}
