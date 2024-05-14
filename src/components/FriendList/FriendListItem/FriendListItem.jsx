const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? (<span>OnLine</span>) : (<span>OffLine</span>)}</p>
    </li>
  );
};

export default FriendListItem;
