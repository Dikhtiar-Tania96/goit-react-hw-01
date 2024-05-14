import FriendListItem from "./FriendListItem/FriendListItem"
import css from './FriendList.module.css'

const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend)=> (
        <FriendListItem key={friend.key} friend={friend}/>
      ))}

    </ul>
  )
}

export default FriendList