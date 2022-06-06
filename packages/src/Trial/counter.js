import React, { Component } from "react";
 export class Counter extends Component{

    constructor(props){
        super(props)
        
        this.state =  {
            count:0
        }
    }

    increment(){
        this.setState ({
            count : this.state.count + 1
        },
        ()=> {
            console.log("Callback value", this.state.count)  // put here
        })
        console.log(this.state.count)  //don't put it out of the bracket
    }
     render(){
         return(
             <div>
             <div> Count = {this.state.count}</div>
              <button onClick={ () => this.increment()}>increment</button>
             </div>
         )
     }
 }

 export default Counter;