import React from "react";
import CardInfo from "./CardInfo";
class CakesList extends React.Component {
  state = {
    cakes: [],
    error: null
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json"
      );
      const data = await res.json();
      this.setState({
        cakes: data
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
        <div>
          <h1>Cakes List</h1>
          <ul>
            {cakes.map((cake, index) => {
              return <CardInfo key={index} cake={cake} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default CakesList;
