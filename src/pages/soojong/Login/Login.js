import React from "react";
import "../Login/Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      userPw: "",
    };
  }

  // handleIdInput = (event) => {
  //   this.setState({
  //     userId: event.target.value,
  //   });
  // };

  // handlePwInput = (event) => {
  //   this.setState({
  //     userPw: event.target.value,
  //   });
  // };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleButton = () => {
    const { userId, userPw } = this.state;
    return userId.includes("@") && userPw.length >= 5;
  };

  goToMain = () => {
    this.props.history.push("/mainkim");
    fetch("http://10.58.0.109:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPw,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "Success") {
          this.props.history.push("/mainkim");
          // localStorage.setItem("TOKEN, result.token");
        } else {
          alert("아이디나 비밀번호를 확인해주세요.");
        }
      });
  };

  render() {
    const isEnabled = this.handleButton();

    return (
      <>
        <div className="loginContainer">
          <div className="wrap">
            <h1>westagram</h1>
            <input
              type="text"
              class="inputLogin"
              id="userId"
              name="userId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
              onKeyUp={this.handleButton}
            />
            <input
              type="password"
              class="inputPassword"
              id="userPw"
              name="userPw"
              placeholder="비밀번호"
              onChange={this.handleInput}
              onKeyUp={this.handleButton}
            />
            <button
              className="login_btn"
              id="btnLogin"
              onClick={this.goToMain}
              disabled={!isEnabled}
              style={{ opacity: isEnabled ? 1 : 0.5 }}
            >
              로그인
            </button>
            <span className=" forgotPassword">
              <a href="">비밀번호를 잊으셨나요?</a>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
