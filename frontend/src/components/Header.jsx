export default function Header() {

	return(

		<header>
			<div className="center flex flex-between">
				<h2><a href="/">Alysson</a></h2>
				<ul className="flex flex-between">
					<li><a href="/">Home</a></li>
					<li><a href="/portfolio">Portfolio</a></li>
					<li><a href="/contato">Contato</a></li>
				</ul>
			</div>
		</header>

	);

}