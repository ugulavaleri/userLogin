import "./style.css";
import userLogo from "../../images/wrapperTopIcon.png";
import emailInput from "../../images/userEmailIcon.png";
import passInput from "../../images/passwordEyeIcon.png";

import UserProfile from "./profilePart";
import { useState } from "react";

const LoginPart = () => {
    const [isHiddenPass, setHiddenPass] = useState(true);
    const [loginClick, setLoginClick] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const loginButtonClick = () => {
        if (userEmail.trim() !== "" && userPassword.trim() !== "") {
            setLoginClick((prev) => !prev);
        } else {
            alert("You must fill all gap!");
        }
    };

    return (
        <div className="container">
            <div className="whiteBoxWrapper">
                <div className="imageDiv">
                    <img src={userLogo} alt="userlogo" />
                </div>
                {loginClick ? (
                    <>
                        <div className="loginTitle">
                            <h3>Login</h3>
                            <p>Hello My Friend</p>
                        </div>
                        <div className="loginInputDiv">
                            <div className="emailInput inputDiv">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) =>
                                        setUserEmail(e.target.value)
                                    }
                                />
                                <img src={emailInput} alt="" />
                            </div>
                            <div className="passInput inputDiv">
                                <input
                                    type={isHiddenPass ? "password" : "text"}
                                    onChange={(e) => {
                                        setUserPassword(e.target.value);
                                    }}
                                    placeholder="Password"
                                />
                                <img
                                    src={passInput}
                                    onClick={() =>
                                        setHiddenPass((prev) => !prev)
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <button onClick={loginButtonClick}>LOG IN</button>
                        </div>
                    </>
                ) : (
                    <UserProfile
                        userEmail={userEmail}
                        setUserEmail={setUserEmail}
                        setLoginClick={setLoginClick}
                        setUserPassword={setUserPassword}
                    />
                )}
            </div>
        </div>
    );
};
export default LoginPart;
