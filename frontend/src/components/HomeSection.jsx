import { Link } from  'react-router-dom';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation} from '../animation';

export default function HomeSection() {

	return(
		<section>
			<motion.h1 variants={titleAnimation} >Título da página</motion.h1>
			<motion.h2 variants={titleAnimation} >Subtítulo da página</motion.h2>
			<motion.p variants={fade}>Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis.</motion.p>
			<motion.img variants={photoAnimation} src="https://f.i.uol.com.br/fotografia/2020/01/30/15803573585e3256eeee4b2_1580357358_3x2_md.jpg" alt="Imagem" />
			<Link to="/contato">Entre em contato!</Link>
		</section>
	);

}
