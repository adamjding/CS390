import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {

    state = {username : "", password : ""};

    printUserName = () => {
        console.log(this.state.username);
    }

    getUserName = () => {
        this.setState({username: document.getElementById("UsernameText").value});
    }

    render() {
        return (
            <div className="Container">
                <div className="LoginForm">
                    <label className="Label">Username</label>
                    <div className="UsernameInput">
                        <input className="Input" type="text" maxLength="50" id="UsernameText"></input>
                    </div>

                    <label className="Label">Password</label>
                    <div className="PasswordInput">
                        <input className="Input" type="text" maxLength="50" id="Passwordtext"></input>
                    </div>

                    <button className="LoginButton">Login</button>
                </div>
            </div>
        );
    }
}

export default LoginPage;