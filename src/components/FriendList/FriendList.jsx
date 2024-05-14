import css from './FriendList.module.css'
import {FriendListItem} from './FriendListItem'

const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map((friend) =>(
                <FriendListItem key = {friend.id} friend = {friend} />
            ))}
        </ul>
    )
}

export default FriendList;