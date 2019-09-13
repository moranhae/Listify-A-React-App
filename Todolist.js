import React, { Component } from "react"; 
import Displaytodo from "./Displaytodo"; 
import "./Todolist.css"

class Todolist extends Component {
    constructor(props) {
        super(props); 
        this.state ={
            items: []
        };
        this.addItem = this.addItem.bind(this); 
    }
    addItem(e) {
        var itemArray = this.state.items; 
        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value, 
                key: Date.now()
            }); 
        this.setState ({
            items: itemArray
        }); 
        this._inputElement.value= "";
        }
        console.log(itemArray); 
        e.preventDefault(); 
    }
    render () {
        return (
            <div className="todolistMain">
                <div className="header">
                    <h1>Listify</h1>
                    <p>Keep Track of Everything</p>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                         placeholder="Enter Task">
                        </input>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
                <Displaytodo entries ={this.state.items} />
            </div>
        );
    }
}
export default Todolist; 