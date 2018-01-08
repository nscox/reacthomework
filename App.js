import React from 'react';
import black from './images/black.jpeg';
import corset from './images/corset.jpeg';
import garter from './images/garter.jpeg';
import gold from './images/gold.jpeg';
import green from './images/green.jpeg';
import lavender from './images/lavender.jpeg';
import leopard from './images/leopard.jpeg';
import purple from './images/purple.jpeg';
import tassel from './images/tassel.jpeg';
import wings from './images/wings.jpeg';

import "./App.css";


const Header = () => {

return(
    <div>
    <h1>Clicky Game!!</h1>
    </div>
);

}

class App extends React.Component{
    constructor(){
        super();
        
        this.state = {
            
            fruit:[black, corset, garter, gold, green, lavender, leopard, purple, tassel, wings]
        };
    }

    
    
    change_data = () => {
        this.setState({ username: "Neil"});
    };

    get_image_info = (index) => {
        console.log("you click", index + 1 + "image");

    };

    render() {
       
        return (
            <div>
                <h1>Clicky Game!!</h1>
                <p>Click on an image to earn points</p>
                


                <ul>
                    { this.state.fruit.map((el, index) => (
<img src = {el} key = { index } onClick = { () => this.get_image_info(index) }/>
                    )) } 
                    </ul>

                   
                    
                    <button onClick = { this.change_data }>Change Name</button>
                </div>
        );
    }
}

export default App;