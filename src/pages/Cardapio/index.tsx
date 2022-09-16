import React, { ReactElement, useState } from 'react';
import style from './Cardapio.module.scss';
import logo from 'assets/logo.svg';
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
            <nav className={style.menu}>
                <img src={logo} alt="logo da Aluroni" />
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>Cardápio</h3>
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