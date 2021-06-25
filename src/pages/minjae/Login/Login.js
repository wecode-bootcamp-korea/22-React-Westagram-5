import React, { Component } from "react";
import "./Login.scss";
import "../Nav/Nav";
import "../../../styles/common.scss";

class Login extends Component {
  goToMain = () => {
    this.props.history.push("/Mainchoi");
  };

  render() {
    return (
      <div className="Login">
        <main className="all">
          <div>
            <section className="loginall">
              <section className="logo">Westagram</section>
              <form className="form">
                <input
                  type="text"
                  className="id"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  defaultValue=""
                />
                <input
                  type="password"
                  className="password"
                  placeholder="비밀번호"
                  defaultValue=""
                />
                <button className="button" onClick={this.goToMain}>
                  로그인
                </button>
              </form>
              <section className="bottom">
                <a
                  className="pw"
                  href="https://www.instagram.com/accounts/password/reset/"
                >
                  비밀번호를 잊으셨나요?
                </a>
              </section>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;
