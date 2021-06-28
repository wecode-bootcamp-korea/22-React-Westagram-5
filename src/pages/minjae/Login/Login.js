import React, { Component } from "react";
import "./Login.scss";
import "../Nav/Nav";
import "../../../styles/common.scss";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      iptIdValue: "",
      iptPwValue: "",
      btnOpacity: "30%",
    };
  }

  goToMain = () => {
    this.props.history.push("/Mainchoi");
  };

  handleIdInput = (e) => {
    this.setState({ iptIdValue: e.target.value });
  };

  handlePwInput = (e) => {
    this.setState({ iptPwValue: e.target.value });
  };

  handleBtn = () => {
    this.state.iptIdValue.includes("@") && this.state.iptPwValue.length > 4
      ? this.setState({ disabled: false, btnOpacity: "100%" })
      : this.setState({ disabled: true, btnOpacity: "30%" });
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
                  onChange={this.handleIdInput}
                  onKeyUp={this.handleBtn}
                  type="text"
                  className="id"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  value={this.state.iptIdValue}
                />
                <input
                  onChange={this.handlePwInput}
                  onKeyUp={this.handleBtn}
                  type="password"
                  className="password"
                  placeholder="비밀번호"
                  value={this.state.iptPwValue}
                />
                <button
                  disabled={this.state.disabled}
                  className="button"
                  style={{ opacity: this.state.btnOpacity }}
                  onClick={this.goToMain}
                >
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
