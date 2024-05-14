import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friendList from "./friendList.json";
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

  <FriendList friends={friendList} />
    </>
  );
}

export default App;
