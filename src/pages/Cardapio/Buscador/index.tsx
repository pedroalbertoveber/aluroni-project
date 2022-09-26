import React, { ReactElement } from 'react';
import style from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>,
}

const Buscador = ({ busca, setBusca }: Props): ReactElement => {

	return(
		<div className={style.buscador}>
			<input type="text" className={style.input} 
				value={busca} 
				placeholder="Buscar"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBusca(e.target.value)}
			/>
			<CgSearch size={20} color={'#4c4d5e'} />
		</div>
	);
};

export default Buscador;