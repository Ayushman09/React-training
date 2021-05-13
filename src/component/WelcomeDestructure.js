import React, { Component } from 'react'
class WelcomeDestructure extends Component {
    render(){
        const {name} = this.props
        // const {state1,state2} = this.state //use incase of states
        return (<h2>Hi, Classs Destructured, {name}</h2>)
    }
}
export default WelcomeDestructure