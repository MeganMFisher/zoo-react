import React, { Component } from 'react';

class Species extends Component {


render() {
 
//  console.log(this.props)

    return (
        <div>
            <h4>{ this.props.name }</h4>
            <p>{this.props.status}</p>
            <button> Feed </button>
        </div>
    )
}

}

export default Species;