// import React, { Component } from "react";
// import "./Login.scss";
// import "../Nav/Nav";
// import "../../../styles/common.scss";
// import { Link } from "react-router-dom";

// class Login extends Component {
//   constructor() {
//     super();

//     this.state = {
//       disabled: true,
//     };
//   }

//   goToMain = () => {
//     this.props.history.push("/Mainchoi");
//   };

//   handleIdInput = (e) => {
//     if ((e.target.value = "")) {
//       this.setState({ disabled: true, valueId: "" });
//     }
//     this.setState({ disabled: false });
//   };

//   handlePwInput = (e) => {};

//   handleBtn = (e) => {};

//   render() {
//     return (
//       <div className="Login">
//         <main className="all">
//           <div>
//             <section className="loginall">
//               <section className="logo">Westagram</section>
//               <form className="form">
//                 <input
//                   onChange={this.handleIdInput}
//                   type="text"
//                   className="id"
//                   placeholder="전화번호, 사용자 이름 또는 이메일"
//                   defaultValue=""
//                 />
//                 <input
//                   onChange={this.handlePwInput}
//                   type="password"
//                   className="password"
//                   placeholder="비밀번호"
//                   defaultValue=""
//                 />
//                 <button
//                   disabled={this.state.disabled}
//                   className="button"
//                   onClick={this.goToMain}
//                 >
//                   로그인
//                 </button>
//               </form>
//               <section className="bottom">
//                 <Link
//                   className="pw"
//                   href="https://www.instagram.com/accounts/password/reset/"
//                 >
//                   비밀번호를 잊으셨나요?
//                 </Link>
//               </section>
//             </section>
//           </div>
//         </main>
//       </div>
//     );
//   }
// }

// export default Login;
