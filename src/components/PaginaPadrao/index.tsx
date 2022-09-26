import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import style from './PaginaPadrao.module.scss';
import styleTema from 'styles/Tema.module.scss';

const PaginaPadrao = ({ children }: { children?: React.ReactNode}): ReactElement => {
	return (
		<>
			<header className={style.header}>
				<div className={style.header__text}>
					A casa do código e da massa
				</div>
			</header>
			<div className={styleTema.container}>
				<Outlet />
				{children}
			</div>
		</>
	);
};

export default PaginaPadrao;