import React, { Component } from 'react'
class Welcome extends Component {
    render(){
        return (<h2>Hi, Classs component, {this.props.name}</h2>)
    }
}
export default Welcome