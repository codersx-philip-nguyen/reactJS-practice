import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    render() {
        return <div className="LoginForm">
                    <form action="">
                        <h2>Welcome</h2>

                        <div class="input-group">
                            <input type="text" id="username" required></input>
                            <label for="username">Username</label>
                        </div>

                        <div class="input-group">
                            <input type="password" id="password" required></input>
                            <label for="password">Password</label>
                        </div>

                        <button type="submit">Login</button>
                        <p>Don't have a account? <a href="#">Sign Up</a></p>
                    </form>
        </div>
    }
}
export default LoginForm;