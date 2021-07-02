import React, { Component } from "react";
import "./Login.scss";
import "../Nav/Nav";
import "../../../styles/common.scss";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      btnOpacity: "30%",
      iptIdValue: "",
      iptPwValue: "",
      phone: "01048392736",
      nickname: "pie",
    };
  }

  handleIdInput = (e) => {
    this.setState({ iptIdValue: e.target.value });
  };

  handlePwInput = (e) => {
    this.setState({ iptPwValue: e.target.value });
  };

  handleBtn = () => {
    const { iptIdValue, iptPwValue } = this.state;

    iptIdValue.includes("@") && iptPwValue.length > 4
      ? this.setState({ disabled: false, btnOpacity: "100%" })
      : this.setState({ disabled: true, btnOpacity: "30%" });
  };

  handleLogin = (e) => {
    e.preventDefault();

    fetch("http://10.58.6.218:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.iptIdValue,
        password: this.state.iptPwValue,
        phone: this.state.phone,
        nickname: this.state.nickname,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.message === "SUCCESS") {
          this.props.history.push("/Mainchoi");
        } else {
          alert("error");
        }
      });
  };

  render() {
    const { iptIdValue, iptPwValue, disabled, btnOpacity } = this.state;

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
                  value={iptIdValue}
                />
                <input
                  onChange={this.handlePwInput}
                  onKeyUp={this.handleBtn}
                  type="password"
                  className="password"
                  placeholder="비밀번호"
                  value={iptPwValue}
                />
                <button
                  disabled={disabled}
                  className="button"
                  style={{ opacity: btnOpacity }}
                  onClick={this.handleLogin}
                >
                  로그인
                </button>
              </form>
              <section className="bottom">
                <a className="pw" href="/mainchoi">
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
