import React, { Component } from "react";
import "./Login.scss";
import "../../../styles/common.scss";

class Login extends Component {
  constructor(e) {
    super(e);

    this.state = {
      userId: "",
      userPw: "",
    };
  }

  // goToMain = () => {
  //   this.props.history.push("/mainPark");
  // };

  handleIdInput = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  handlePwInput = (e) => {
    this.setState({
      userPw: e.target.value,
    });
  };

  onClick = () => {
    fetch("http://10.58.6.173:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPw,
        name: "정훈1121",
        phone: "01048780454",
        nickname: "나1나나112",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message === "SUCCESS") {
          this.props.history.push("/mainPark");
          localStorage.setItem("TOKEN", result.token);
        } else {
          alert("리트라이 플리즈");
        }
      });
  };

  checkSubmmit = () => {
    const { userId, userPw } = this.state;
    return userId.includes("@") > 0 && userPw.length >= 5;
  };

  render() {
    // const isEnabled = this.checkSubmmit();
    // console.log(isEnabled);

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
                  onChange={this.handleIdInput}
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  onChange={this.handlePwInput}
                  placeholder="비밀번호"
                />
              </div>
            </section>
            <div>
              <button
                className="login-btn"
                disabled={!this.checkSubmmit()}
                onClick={this.onClick}
                style={{ opacity: this.checkSubmmit() ? 1 : 0.2 }}
              >
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
