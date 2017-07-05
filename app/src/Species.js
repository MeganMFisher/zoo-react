import React, { Component } from 'react';

class Species extends Component {

handleClick() {
    this.props.action(this.props.name)
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