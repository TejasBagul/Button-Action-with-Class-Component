import React, {Component} from "react"; 
 import '../styles/App.css'; 
  
 class App extends Component { 
     constructor(props) { 
                 super(props); 
                 this.state={ 
                               id:"", 
                         text:""
                 } 
         }; 
  
     render() { 
                 const handleClick=()=>{ 
                         this.setState({ 
                                 id:'para', 
                                 text:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy" 
                         }) 
                 } 
             return( 
                     <div id="main"> 
                                 <p id={this.state.id}>{this.state.text}</p> 
                                 <button id='click' onClick={handleClick}>Click</button> 
                     </div> 
             ); 
     } 
 } 
  
  
 export default App;
