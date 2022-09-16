import React, { ReactElement, useState } from 'react';
import style from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    ordenador: string;
    setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

const Ordenador = ({ ordenador, setOrdenador }: Props): ReactElement => {

    const [ aberto, setAberto ] = useState<boolean>(false);
    const nomeOrdenador = ordenador && opcoes.find(item => item.value === ordenador)?.nome;

    return (
        <button 
            className={`${style.ordenador} ${ordenador!== "" ? style["ordenador--ativo"] : ""}`} 
            onClick={() => setAberto(!aberto)} 
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenador || "Ordenar Por"}</span>
            {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
            <div className={`${style.ordenador__options} ${aberto ? style["ordenador__options--ativo"] : ""}`}>
                {opcoes.map(item => (
                    <div className={style.ordenador__option} key={item.value} onClick={() => setOrdenador(item.value)}>
                        {item.nome}
                    </div>
                ))}
            </div>
        </button>
    );
};

export default Ordenador;