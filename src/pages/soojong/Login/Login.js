import React from "react";
import "../Login/Login.scss";
import "../../../styles/common.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      userPw: "",
    };
  }

  handleIdInput = (event) => {
    this.setState({
      userId: `${event.target.value}`,
    });
  };

  handlePwInput = (event) => {
    this.setState({
      userPw: `${event.target.value}`,
    });
  };

  goToMain = () => {
    this.props.history.push("/mainkim");
  };

  render() {
    return (
      <>
        <div className="LoginContainer">
          <div className="wrap">
            <h1>westagram</h1>
            <input
              type="text"
              class="inputLogin"
              id="userId"
              name="userId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              class="inputPassword"
              id="userPw"
              name="userPw"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              className="loginButton"
              id="btnLogin"
              onClick={this.goToMain}
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
