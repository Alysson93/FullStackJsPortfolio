import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Contact() {

	return (
		<div>
			<h1>Entre em contato!</h1>
			<form>
				<input type="text" placeholder="Nome" required />
				<input type="email" placeholder="E-mail" required />
				<textarea rows="5"></textarea>
				<input type="submit" value="Enviar" />
			</form>
			<div>
				<FaGithubSquare />
				<h3>github</h3>
				<FaLinkedin />
				<h3>linkedin</h3>
			</div>
		</div>
	);

}