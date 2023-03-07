import { FaBars } from 'react-icons/fa';

function showMenu() {
	alert('teste');
}

export default function Header() {

	return(

		<header>
			<a href="/">Alysson</a>
			<div>
				<a href="/">Home</a>
				<a href="/portfolio">Portfólio</a>
				<a href="/contato">Contato</a>
			</div>
			<FaBars id="icon-bars" onClick={showMenu} />
		</header>

	);

}