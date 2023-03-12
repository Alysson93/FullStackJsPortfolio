import React, { useState } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { save } from '../services/Sheet';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

export default function Contact() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const contactHandler = async (e) => {
		e.preventDefault();
		const data = {
			Nome: name,
			Email: email,
			Mensagem: message,
			Data: new Date()
		};
		const result = await save(data);
		setSuccess(result);
		setError(!result);
		if (result) {
			resetForm();
		}
	}

	const resetForm = () => {
		setName('');
		setEmail('');
		setMessage('');
	}

	return (
		<motion.div 
			initial='hidden'
			animate='show'
			exit='exit'
			variants={pageAnimation}
		>
			<h1>Entre em contato!</h1>
			<form onSubmit={contactHandler}>
				<input 
					type="text" 
					placeholder="Nome" 
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input 
					type="email" 
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<textarea 
					rows="5" 
					value={message} 
					onChange={(e) => setMessage(e.target.value)} 
				></textarea>
				<input type="submit" value="Enviar" />
				{success && <h4>Mensagem enviada com sucesso!</h4>}
				{error && <h4>Ocorreu um erro. Por favor, envie novamente.</h4>}
			</form>
			<div>
				<FaGithubSquare />
				<h3>github</h3>
				<FaLinkedin />
				<h3>linkedin</h3>
			</div>
			<ScrollTop />
		</motion.div>
	);

}