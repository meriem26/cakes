import React from 'react';
const CakeSearch = props => {
	const { cakes = [], updateResult } = props;
	const doSearch = e => {
		const { value } = e.target;

		const filterCakeList = cakes.filter(cake => {
			const { title = '' } = cake;
			return title.toLowerCase().includes(value);
		});

		updateResult(filterCakeList);
	};

	return (
		<div>
			<input type="text" onChange={doSearch} placeholder="Search..." />
		</div>
	);
};
export default CakeSearch;
