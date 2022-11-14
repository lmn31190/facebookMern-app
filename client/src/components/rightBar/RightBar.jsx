import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./rightBar.scss";

const RightBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions Pour Toi</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={`/upload/${currentUser.profilePic}`}
                alt=""
              />
              <span>Louis Monié</span>
            </div>
            <div className="buttons">
              <button>Accepter</button>
              <button>Refuser</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={`/upload/${currentUser.profilePic}`}
                alt=""
              />
              <span>Louis Monié</span>
            </div>
            <div className="buttons">
              <button>Accepter</button>
              <button>Refuser</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Activité Récentes</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={`/upload/${currentUser.profilePic}`}
                alt=""
              />
              <p>
                <span>Louis Monié</span> à changé sa photo de profil
              </p>
            </div>
            <span>1 min</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={`/upload/${currentUser.profilePic}`}
                alt=""
              />
              <p>
                <span>Louis Monié</span> à changé sa photo de profil
              </p>
            </div>
            <span>1 min</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={`/upload/${currentUser.profilePic}`}
                alt=""
              />
              <p>
                <span>Louis Monié</span> à changé sa photo de profil
              </p>
            </div>
            <span>1 min</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={`/upload/${currentUser.profilePic}`}
                alt=""
              />
              <p>
                <span>Louis Monié</span> à changé sa photo de profil
              </p>
            </div>
            <span>1 min</span>
          </div>
        </div>

        <div className="item">
          <span>Ami(e)s en ligne</span>
          <div className="user">
            <div className="userInfo">
              <div className="online" />
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt=""
                />
              <span>Louis Monié</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="online" />
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt=""
                />
              <span>Louis Monié</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="online" />
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt=""
                />
              <span>Louis Monié</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="online" />
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt=""
                />
              <span>Louis Monié</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="online" />
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt=""
                />
              <span>Louis Monié</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="online" />
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt=""
                />
              <span>Louis Monié</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="online" />
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt=""
                />
              <span>Louis Monié</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="online" />
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt=""
                />
              <span>Louis Monié</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="online" />
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt=""
                />
              <span>Louis Monié</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
