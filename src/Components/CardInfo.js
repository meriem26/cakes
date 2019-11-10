import React from 'react';
import './CardInfoStyle.css';

const CardInfo = props => {
	const { cake = {} } = props;
	const { title, desc, image } = cake;
	return (
		<div className="card-info">
			<h1 data-qa="cake-title">{title}</h1>
			<p data-qa="cake-desc">{desc}</p>
			<img data-qa="cake-img" src={image} />
		</div>
	);
};
export default CardInfo;
