import React,{Component} from "react";
import CardList from './CardList'
import Scroll from './Scroll'
import SearchBox from './SearchBox';

import './App.css';


class App extends Component
{
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({robots:user}))
  }
  onSearchChange=(event)=>{
   this.setState({searchfield:event.target.value})

  }
  render(){

    const filtredrobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length===0){
      return <h1>Loading</h1>
    }else {
      return(
        <div className="tc">
                <h1 className="f1" id="titre">ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filtredrobots}/>
                </Scroll>
                
          </div>
        
        )

    }



}}
export default App;