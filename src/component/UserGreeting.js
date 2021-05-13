import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    
    render() {

        return(
            this.state.isLoggedIn ? <div>Welcome Ayush</div> : <div>Welcome Guest</div>
        )

    //     if(this.state.isLoggedIn){
    //     return (
    //             <div>Welcome Ayush</div> 
    //     )
    //     }
    //     else {
    //         return (
    //             <div>Welcome Guest</div> 
    //     )

    //     }
    // }
}
}

export default UserGreeting
