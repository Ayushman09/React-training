import React, { Component } from 'react'
class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage() {
        this.setState({
            message : "Thanks for Clicking"
        })
    }
    render(){
        // return (<h2>Welcome Visitor</h2>)
        return( 
        <div><h2>{this.state.message}</h2> 
        <button onClick={() => this.changeMessage()}><b>ClickMe</b></button>
        </div>
        )
    }
}
export default Message