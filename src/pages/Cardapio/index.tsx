import React, { ReactElement, useState } from 'react';
import style from './Cardapio.module.scss';
import styleTema from 'styles/Tema.module.scss';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
 
const Cardapio = (): ReactElement => {

	const [ busca, setBusca ] = useState<string>('');
	const [ filtro, setFiltro ] = useState<null | number>(null);
	const [ ordenador, setOrdenador ] = useState<string>('');

	return (
		<main>
			<section className={style.cardapio}>
				<h3 className={styleTema.titulo}>Cardápio</h3>
				<Buscador busca={busca} setBusca={setBusca}/>
				<div className={style.cardapio__filtros}>
					<Filtros filtro={filtro} setFiltro={setFiltro}/>
					<Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
				</div>
				<Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
			</section>
		</main>
	);
};

export default Cardapio;