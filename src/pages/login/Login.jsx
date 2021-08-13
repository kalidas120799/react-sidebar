import React, { Component } from 'react'
export default class Login extends Component {
    loginbtn=()=>{
        var token=Date.now().toString()
        localStorage.setItem("token",token)
        window.location.replace("/home")
    }
    render() {
        return (
            <div>
                Login
                <div className='mt-4'>
                    <button className='btn btn-info' onClick={this.loginbtn}>Login</button>
                </div>
            </div>
        )
    }
}
