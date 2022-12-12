import React from "react";

class MyComponent extends React.Component {
    
    state = {
        name: 'Bao',
        address: 'Vietnam',
        age: 22
    };

    handleClick(event){
        console.log(this.state.name)
        // console.log(event)
    }

    handleOnMouseOver(event){
        console.log(event)
    }

    render(){
        return(
            <div>My name is {this.state.name}, I'm from {this.state.address}
            <button onClick={this.handleClick}>Click me</button>
            <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        )
    }
}

export default MyComponent;