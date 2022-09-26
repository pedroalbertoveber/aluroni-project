import React, { ReactElement } from 'react';
import style from './TagsPrato.module.scss';
import classNames from 'classnames';
import { IPrato } from 'types/Prato';

const TagsPrato = ({
	category,
	size,
	serving,
	price
}: IPrato): ReactElement => {
	return (
		<div className={style.tags}>
			<div className={classNames({
				[style.tags__tipo] : true,
				[style[`tags__tipo__${category.label.toLowerCase()}`]]: true,
			})}>
				{category.label}
			</div>
			<div className={style.tags__porcao}>
				{size}g
			</div>
			<div className={style.tags__qtdpessoas}>
				{serving} pessoa{serving == 1 ? '' : 's'}
			</div>
			<div className={style.tags__valor}>
				R$ {price.toFixed(2)}
			</div>
		</div>
	);
};

export default TagsPrato;