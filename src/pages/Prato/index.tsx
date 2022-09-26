import React, { ReactElement } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

const Prato = ():ReactElement => {

	const navigate = useNavigate();

	const { id } = useParams();
	const prato = cardapio.find(item => item.id === Number(id));

	if (!prato) {
		return <NotFound />;
	}

	return(
		<PaginaPadrao>
			<button className={style.voltar} onClick={() => navigate(-1)}>
				{'< Voltar'}
			</button>
			<section className={style.container}>
				<h1 className={style.titulo}>{prato?.title}</h1>
			</section>
			<div className={style.imagem}>
				<img src={prato?.photo} alt={prato?.title} />
			</div>
			<div className={style.conteudo}>
				<p className={style.conteudo__descricao}>{prato?.description}</p>
				<TagsPrato {...prato!} />
			</div>
		</PaginaPadrao>
	);
};

export default Prato;