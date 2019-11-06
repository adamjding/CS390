import React from 'react';
import './LoginPage.css';
import NavBar from './NavBar';

class LoginPage extends React.Component {

    state = {username : "", password : ""};

    printUserName = () => {
        console.log(this.state.username);
        console.log(this.state.password);
        if(this.state.username === "" && this.state.password === "") {
            console.log("Username and Password are empty");
        }
        else if(this.state.username === "") {
            console.log("Username is empty");
        }
        else if(this.state.password === "") {
            console.log("Password is empty");
        }
        else {
            console.log("Fields are filled out");
        }
    }

    setUsername = () => {
        this.setState({username: document.getElementById("UsernameText").value});
    }

    setPassword = () => {
        this.setState({password: document.getElementById("PasswordText").value});
    }

    render() {
        return (
            <div className="Container">
                <NavBar />
                <div className="LoginForm">

                    <label className="Label">Username</label>
                    <div className="UsernameInput">
                        <input className="Input" type="text" maxLength="50" id="UsernameText" onChange={this.setUsername}></input>
                    </div>

                    <label className="Label">Password</label>
                    <div className="PasswordInput">
                        <input className="Input" type="password" maxLength="50" id="PasswordText" onChange={this.setPassword}></input>
                    </div>

                    <div className="Buttons">
                        <button className="LoginButton" onClick={this.printUserName}>Login</button>
                        <button className="RegisterButton">Register</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default LoginPage;