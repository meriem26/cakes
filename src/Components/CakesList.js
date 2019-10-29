import React from "react";
import CardInfo from "./CardInfo";
import { fetchCakesList } from "../API/index";
class CakesList extends React.Component {
  state = {
    cakes: [],
    error: null
  };

  async componentDidMount() {
    try {
      const cakes = await fetchCakesList();
      this.setState({
        cakes
      });
    } catch (err) {
      console.error(err);
      this.setState({
        error: true
      });
    }
  }
  render() {
    const { cakes, error } = this.state;

    return (
      <div>
        {error ? (
          <h1>You have an Error </h1>
        ) : (
          <div>
            <h1>Cakes List</h1>
            <ul>
              {cakes.map((cake, index) => {
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
