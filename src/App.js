import React, {Component} from 'react';
import TodoItems from "./components/todoitems/todo";
import AddItems from './components/additems/add'
class App extends Component {
  state = {
    items : [
      {id:1 , name:"Ahmed" , age:24},
      {id:2 , name:"ibrahem", age:25}
    ]
  }
  deleteItem = (id) => {
     let items = this.state.items;
     let i = items.findIndex(item => item.id === id)
     items.splice(i,1)
     this.setState({items:items})
  }
  addItem = (item) => {
    item.id = Math.random();
  let items = this.state.items;
  items.push(item);
  this.setState({items})
  }
  render(){
    return ( 
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems  items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItems addItem={this.addItem} />
      </div>
    )
  }
}

export default App;
