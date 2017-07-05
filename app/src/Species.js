import React, { Component } from 'react';
/*
class Species extends Component {

handleClick() {
    this.props.action(this.props.name) //invoking feedSpecies on app.js
}


render() {
 
//  console.log(this.props)

    return (
        <div>
            <h4>{ this.props.name }</h4>
            <p>{this.props.status}</p>
            <button onClick={this.handleClick.bind(this)}> Feed </button>
        </div>
    )
}

}

export default Species;

*/




// Functional Component Example: 

export default function Species(props) {
    function handleClick() {
        props.action(props.name);
    }


return (
        <div>
            <h4>{ props.name }</h4>
            <p>{ props.status}</p>
            <button onClick={handleClick}> Feed </button>
        </div>
)

}