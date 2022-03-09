import { Component } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

// const App = function () {
//   const [searchField, setSearchField] = useState("");
//   // const filterMonsters = monsters.filter((monster) =>
//   //   monster.name.toLocaleLowerCase().includes(searchField)
//   // );

//   const onSearchChange = (event) => {
//     const search = event.target.value.toLocaleLowerCase();
//     console.log(search);
//     console.log(searchField);
//     setSearchField(search);
//   };
//   return (
//     <div className="App">
//       <SearchBox
//         onChangeHandler={onSearchChange}
//         placeholder="search monsters"
//         className="monster-search-box"
//       />
//       <h1>Ramayan Monsters</h1>
//       {/* <CardList monster={filterMonsters} /> */}
//     </div>
//   );
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
    // console.log("constructor");
  }
  //fetch
  componentDidMount() {
    // console.log("componetDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok)
          throw new Error("Sorry not found your monsters " + res.status);
        return res.json();
      })
      .then((data) => {
        this.setState(() => {
          return { monsters: data };
        });
      })
      .catch((err) => this.render(err));
  }

  onSearchChange = (event) => {
    const search = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { search };
    });
  };

  render() {
    const { monsters, search } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(search)
    );

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monster-search-box"
        />
        <h1>Ramayan Monsters</h1>
        <CardList monster={filterMonsters} />
      </div>
    );
  }
}

export default App;
