import React, { ReactElement } from 'react';
import logo from 'assets/logo.svg';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = (): ReactElement => {

	const rotas = [{
		label: 'Início',
		to: '/',
	}, {
		label: 'Cardápio',
		to:'/cardapio',
	}, {
		label: 'Sobre',
		to: '/sobre',
	}];

	return (
		<nav className={style.menu}>
			<img src={logo} alt="logo da Aluroni" />
			<ul className={style.menu__list}>
				{rotas.map((rota, index) => (
					<li key={index} className={style.menu__link}>
						<Link to={rota.to}>
							{rota.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Menu;