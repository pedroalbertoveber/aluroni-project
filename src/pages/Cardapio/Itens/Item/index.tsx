import React, { ReactElement } from 'react';
import style from './Item.module.scss';
import { IPrato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';

const Item = (props: IPrato): ReactElement => {

	const { title, description, photo } = props;
	const navigate = useNavigate();

	return (
		<div className={style.item} onClick={() => navigate(`/prato/${props.id}`)}>
			<figure className={style.item__imagem}>
				<img src={photo} alt={title} />
			</figure>
			<figcaption className={style.item__descricao}>
				<div className={style.item__titulo}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<TagsPrato {...props}/>
			</figcaption>
		</div>
	);
};

export default Item;