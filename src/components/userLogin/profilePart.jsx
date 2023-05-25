import "./style.css";
import UserAvatar from "../../images/User-avatar.png";

const UserProfile = ({
    userEmail,
    setLoginClick,
    setUserEmail,
    setUserPassword,
}) => {
    const logOutClick = () => {
        setLoginClick(true);
        setUserEmail("");
        setUserPassword("");
    };

    return (
        <div className="UserProfileContainer">
            <div>
                <h3>{userEmail}</h3>
            </div>
            <div>
                <img src={UserAvatar} />
            </div>
            <div>
                <button onClick={logOutClick}>LOG OUT</button>
            </div>
        </div>
    );
};
export default UserProfile;
