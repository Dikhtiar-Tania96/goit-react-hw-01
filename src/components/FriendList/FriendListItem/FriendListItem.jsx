import css from './FriendListItem.module.css'

const FriendListItem = ({friend: {avatar, name, isOnline}}) =>{
return (
<li>
  <img alt="Avatar" width="48" src={avatar}/>
  <p>{name}</p>
  <p>{isOnline ? (<span>Online</span>) : (<span>Offline</span>)}</p>
</li>

)
}

export default FriendListItem;