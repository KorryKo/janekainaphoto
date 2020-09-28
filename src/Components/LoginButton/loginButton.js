import React from 'react';
import './loginButton.css';

class LoginButton extends react.component {

    render() {
        return
            <div className="background-color-button">
                <div className="container">
                    <h1>Привет!</h1>
                    <h2>Нажми на кнопку, чтобы войти</h2>
                    <a id="button" onClick="document.getElementById('id01').style.display='block'">
                    Войти
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                    <div className="ring four"></div>
                    </a>
            <div id="id01" className="modal">
                <span onClick="document.getElementById('id01').style.display='none'" className="close"
                      title="Close Modal">&times;</span>

                <form className="modal-content animate" action="/action_page.php">

                    <div className="container-modal">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required>

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required>

                                <button className="inbutton" type="submit">Login</button>
                                <label>
                                    <input type="checkbox" checked="checked" name="remember"> Remember me </input>
                                </label>
                    </div>

                    <div className="container-modal" style="background-color:#f1f1f1">
                        <button className="inbutton" type="button"
                                onClick="document.getElementById('id01').style.display='none'"
                                className="cancelbtn">Cancel
                        </button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>


        </div>
        </div>
    }
}
