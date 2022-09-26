import React, { ReactElement } from 'react';
import style from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

const Footer = (): ReactElement => {
	return (
		<footer className={style.footer}>
			<Logo />
		</footer>
	);
};

export default Footer;