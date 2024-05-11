import './App.css';
import React from 'react';

class Counter extends React.Component {
    
      constructor()
      {
        super()
        this.state={
            count:0,
        }
      }
             
      increment(){
         this.setState((prevstate)=>({count:prevstate.count+1}))
      }

      decrement(){
        this.setState((prevstate)=>({count:prevstate.count-1}))
     }


      render()
      {     return(
           <div>
               <div>Counter App</div>
               <p>Count: {this.state.count}</p>
               <div>
               <button onClick={()=>this.increment()}>Increment</button>
               <button onClick={()=>this.decrement()}>Decrement</button>
               </div>
           </div>
         )
      }
    
    
}

export default Counter;
