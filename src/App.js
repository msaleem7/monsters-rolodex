import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/searchbox/searchbox.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchfield } = this.state
    const filteredArray = monsters.filter(monster => monster.username.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder="Search Monsters" changehandler={e => this.setState({ searchfield: e.target.value })}></SearchBox>
          <CardList monsters={filteredArray}></CardList>



          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
