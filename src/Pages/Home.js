import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = v4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room Id and username is required");
      return;
    }

    //redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <>
      <div className="homePageWrapper">
        <div className="formWrapper">
          <img
            className="homePageLogo"
            src="/code-sync.png"
            alt="code-sync-logo"
          />
          <h4 className="mainLabel">Paste invitation ROOM ID</h4>
          <div className="inputGroup">
            <input
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              type="text"
              className="inputBox"
              placeholder="ROOM ID"
              onKeyUp={handleInputEnter}
            />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="inputBox"
              placeholder="USERNAME"
              onKeyUp={handleInputEnter}
            />
            <button onClick={joinRoom} className="btn joinBtn">
              Join
            </button>
            <span className="createInfo">
              If you don't have an invite then create &nbsp;
              <a onClick={createNewRoom} href="" className="createNewBtn">
                new room
              </a>
            </span>
          </div>
        </div>
        <footer>
          <h4>
            Built with 💛 &nbsp; by &nbsp;
            <a href="https://github.com/codersgyan">Coder's Gyan</a>
          </h4>
        </footer>
      </div>
    </>
  );
};

export default Home;
