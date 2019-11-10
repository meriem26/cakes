import React from 'react';
import CardInfo from './CardInfo';
import { fetchCakesList } from '../API/index';
import CakeSearch from './CakeSearch';
class CakesList extends React.Component {
	state = {
		cakes: [],
		filterCakeList: [],
		error: null,
	};

	// https://reactjs.org/docs/lifting-state-up.html

	async componentDidMount() {
		try {
			const cakes = await fetchCakesList();
			this.setState({
				cakes,
				filterCakeList: cakes,
			});
		} catch (err) {
			console.error(err);
			this.setState({
				error: true,
			});
		}
	}
	displayCakeList = filterCakeList => {
		this.setState({
			filterCakeList,
		});
	};

	render() {
		const { filterCakeList, error, cakes } = this.state;
		return (
			<div>
				{error ? (
					<h1>You have an Error </h1>
				) : (
					<div>
						<h1>Cakes List</h1>
						<CakeSearch cakes={cakes} updateResult={this.displayCakeList} />
						<ul>
							{filterCakeList.map((cake, index) => {
								return <CardInfo key={index} cake={cake} />;
							})}
						</ul>
					</div>
				)}
			</div>
		);
	}
}
export default CakesList;
