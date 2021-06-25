import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  goToMain = () => {
    this.props.history.push("/mainPark");
  };

  render() {
    return (
      <div className="LogInPageAll">
        <main className="mainLogIn">
          <header className="mainLogo">
            <p>Westagram</p>
          </header>
          <div id="loginWrapper">
            <section className="loginContents">
              <div>
                <input
                  type="text"
                  id="typingId"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
              </div>
              <div>
                <input type="password" id="password" placeholder="비밀번호" />
              </div>
            </section>
            <div>
              <button className="login-btn" onClick={this.goToMain}>
                로그인
              </button>
            </div>
          </div>
          <footer className="forgotPw">
            <p>비밀번호를 잊으셨나요?</p>
          </footer>
        </main>
      </div>
    );
  }
}

export default Login;
