import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [liveViewers, setLiveViewers] = useState([]);
  const [announcementVideoId, setAnnouncementVideoId] = useState("");
  const [liveVideoId, setLiveVideoId] = useState("");
  const [showNames, setShowNames] = useState(false);
  const apiKey = "AIzaSyBsR7AL3EmwZz2DoHJ6G3Ecdz_nPQ0EmmE";
  let [allComments, setAllComments] = useState([]);
  const [arr, setArr] = useState([
    { name: "josh" },
    { name: "jordan" },
    { name: "victor" },
    { name: "adam" },
  ]);

  const retrieveCommentList = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2C%20snippet&maxResults=500&videoId=${announcementVideoId}&key=${apiKey}`
      )
      .then((res) => {
        const data = res.data;
        setAllComments(
          data.items.map(
            (item, index) =>
              item.snippet.topLevelComment.snippet.authorDisplayName
          )
        );
        // setAllComments(
        //   data.items.map((item, index) => ({
        //     name: item.snippet.topLevelComment.snippet.authorDisplayName
        //   }))
        // )
        setShowNames(true);
      });
  };

  let uniqueNames = new Set(allComments);
  allComments = [...uniqueNames];
  let usernames = [];

  allComments.forEach((name) => {
    usernames.push({
      name,
    });
  });

  console.log(usernames);

  // const retrieveLiveCommentList = () => {
  //   axios
  //     .get(
  //       `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2C%20snippet&maxResults=500&videoId=${liveVideoId}&key=${apiKey}`
  //     )
  //     .then((res) => {
  //       const data = res.data;
  //       setLiveViewers(data);
  //       setShowNames(true);
  //     });
  // };
  // console.log("Comments", nameObj);
  return (
    <div className="App-header">
      {/* Announcement Video */}
      <div className="announcement-usernames">
        <div className="get-username-section">
          <label className="name-label" for="name">
            Announcement video ID
          </label>
          <input
            className="name-input"
            type="text"
            id="name"
            name="name"
            onChange={(e) => setAnnouncementVideoId(e.target.value)}
          />
          <button className="btn" onClick={retrieveCommentList}>
            Get Usernames
          </button>
        </div>
        {showNames ? (
          <>
            <p>Usernames:</p>
            {usernames.map((x) => (
              <p className="usernames">{x.name}</p>
            ))}
          </>
        ) : (
          <>
          </>
        )}
      </div>
      {/* Announcement Video */}

      {/* Live Stream Video */}
      {/* <label for="name">Live Stream video ID</label>
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
      )} */}
      {/* Live Stream Video */}
    </div>
  );
}

export default App;
