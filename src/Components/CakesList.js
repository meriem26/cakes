import React from 'react';
import CardInfo from './CardInfo';
import { fetchCakesList } from '../API/index';
//import CakesSearch from './CakesSearch';
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

	doSearch = e => {
		const { cakes = [] } = this.state;
		const { value } = e.target;

		const filterCakeList = cakes.filter(cake => {
			const { title = '' } = cake;
			return title.toLowerCase().includes(value);
		});

		this.setState({
			filterCakeList,
		});
	};

	render() {
		const { filterCakeList, error } = this.state;
		return (
			<div>
				{error ? (
					<h1>You have an Error </h1>
				) : (
					<div>
						<h1>Cakes List</h1>
						{/* <CakesSearch value={this.state.cakeSearch} handleChange={this.doSearch} /> */}
						<input type="text" onChange={this.doSearch} placeholder="Search..." />
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
