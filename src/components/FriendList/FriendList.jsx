import FriendListItem from "./FriendListItem/FriendListItem"

const FriendList = ({friends}) => {
  return (
    <ul>
      {friends.map((friend)=> (
        <FriendListItem key={friend.key} friend={friend}/>
      ))}

    </ul>
  )
}

export default FriendList