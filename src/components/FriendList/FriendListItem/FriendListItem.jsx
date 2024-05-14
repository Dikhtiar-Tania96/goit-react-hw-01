import css from './FriendListItem.module.css'

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.cardItem}>
      <img className={css.photoItem} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p> 
      <p className={css.friendStatus}>{isOnline ? (<span className={css.onLine}>OnLine</span>) : (<span className={css.offLine}>OffLine</span>)}</p>
    </li>
  );
};

export default FriendListItem;
