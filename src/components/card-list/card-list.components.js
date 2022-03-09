import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monster } = this.props;
    console.log(monster);

    return (
      <div className="card-list">
        {monster.map((ele) => {
          return <Card monster={ele} />;
        })}
      </div>
    );
  }
}
export default CardList;
