import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    color: "white"
  }
});

function App() {
  const [allComments, setAllComments] = useState({});
  const [liveViewers, setLiveViewers] = useState({});
  const [announcementVideoId, setAnnouncementVideoId] = useState("");
  const [liveVideoId, setLiveVideoId] = useState("");
  const [showNames, setShowNames] = useState(false);
  const apiKey = "AIzaSyA4_QRYJCyFGMtBsDZIBJ1AC_pdTvcQ_zE";

  const retrieveCommentList = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2C%20snippet&maxResults=500&videoId=${announcementVideoId}&key=${apiKey}`
      )
      .then((res) => {
        const data = res.data;
        setAllComments(data);
        setShowNames(true);
      });
  };

  const retrieveLiveCommentList = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2C%20snippet&maxResults=500&videoId=${liveVideoId}&key=${apiKey}`
      )
      .then((res) => {
        const data = res.data;
        setLiveViewers(data);
        setShowNames(true);
      });
  };

 

  console.log("Comments", allComments);
  return (
    <div className="App-header">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* Announcement Video */}
        <div className="announcement-wrapper">
          <input
            type="text"
            placeholder="Announcement Video ID"
            className="input-field"
            onChange={(e) => setAnnouncementVideoId(e.target.value)}
          />
          <button onClick={retrieveCommentList}>Get Usernames</button>
          {showNames ? (
            <>
              <p>Usernames:</p>
              {allComments.items.map((user, index) => (
                <p key={index}>
                  {user.snippet.topLevelComment.snippet.authorDisplayName}
                </p>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        {/* Announcement Video */}
      </Box>

      {/* Live Stream Video */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="live-wrapper">
          <input
            placeholder="Live Video ID"
            className="input-field"
            onChange={(e) => setLiveVideoId(e.target.value)}
          />
          <button onClick={retrieveLiveCommentList}>Get Usernames</button>
          {showNames ? (
            <>
              <p>Usernames:</p>
              {allComments.items.map((user, index) => (
                <p key={index}>
                  {user.snippet.topLevelComment.snippet.authorDisplayName}
                </p>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </Box>
      {/* Live Stream Video */}
    </div>
  );
}

export default App;

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */




      import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [allComments, setAllComments] = useState({});
  const [liveViewers, setLiveViewers] = useState([]);
  const [announcementVideoId, setAnnouncementVideoId] = useState("");
  const [liveVideoId, setLiveVideoId] = useState("");
  const [showNames, setShowNames] = useState(false);

  const apiKey = "AIzaSyA4_QRYJCyFGMtBsDZIBJ1AC_pdTvcQ_zE";
  const retrieveCommentList = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2C%20snippet&maxResults=500&videoId=${announcementVideoId}&key=${apiKey}`
      )
      .then((res) => {
        const data = res.data;
        setAllComments(data);
        setShowNames(true);
      });
  };

  const retrieveLiveCommentList = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2C%20snippet&maxResults=500&videoId=${liveVideoId}&key=${apiKey}`
      )
      .then((res) => {
        const data = res.data;
        setLiveViewers(data);
        setShowNames(true);
      });
  };
  console.log("Comments", allComments);
  return (
    <div className="App-header">

      {/* Announcement Video */}
      <label for="name">Announcement video ID</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setAnnouncementVideoId(e.target.value)}
      />
      <button onClick={retrieveCommentList}>Get Comments</button>
      {showNames ? (
        <>
          <p>Usernames:</p>
          {allComments.items.map((user, index) => (
            <p key={index}>
              {user.snippet.topLevelComment.snippet.authorDisplayName}
            </p>
          ))}
        </>
      ) : (
        <>
          <p>Usernames:</p>
        </>
      )}
  {/* Announcement Video */}

  {/* Live Stream Video */}
      <label for="name">Live Stream video ID</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setLiveVideoId(e.target.value)}
      />
      <button onClick={retrieveLiveCommentList}>Get Live Comments</button>
      {showNames ? (
        <>
          <p>Usernames:</p>
          {allComments.items.map((user, index) => (
            <p key={index}>
              {user.snippet.topLevelComment.snippet.authorDisplayName}
            </p>
          ))}
        </>
      ) : (
        <>
          <p>Usernames:</p>
        </>
      )}
      {/* Live Stream Video */}


    </div>
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
