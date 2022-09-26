import filtros from './filtros.json';

import React, { ReactElement }  from 'react';
import style from './Filtros.module.scss';

interface Item {
  id: number;
  label: string;
}

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ({ filtro, setFiltro }: Props): ReactElement => {

	const selecionarFiltro = (item: Item) => {
		if (filtro === item.id) return setFiltro(null);
		return setFiltro(item.id);
	};

	return (
		<div className={style.filtros}>
			{filtros.map(item => (
				<button key={item.id} onClick={() => selecionarFiltro(item)} 
					className={`${style.filtros__filtro} ${filtro === item.id ? style['filtros__filtro--ativo'] : ''}`}
				>
					{item.label}
				</button>
			))}
		</div>
	);
};

export default Filtros;