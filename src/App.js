import './App.css';

import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then((users) => 
        this.setState(
          () => {return {monsters: users}}
        ));
      
  }
  onSearchChange = (event) => { 
    const searchField = event.target.value.toLowerCase();
    this.setState(()=>{
      return {searchField};
    })
  };

  render(){
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonster = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
          });
    
    return (
      <div className="App">
        <img src={require('./logo192.png')} alt={''}/>
        <h1 className='app-title'>Monster Cards </h1>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeHolder={'search for a monster'}
          className={'monster-search-box'}/>

        <CardList monsters={filteredMonster}/>
      </div>
  );
  }
}

export default App;
