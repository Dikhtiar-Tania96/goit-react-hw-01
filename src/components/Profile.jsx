import css from './Profile.module.css'
const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <>
      <div className={css.userCard}>
        <img className={css.userPhoto} src={image} alt="User avatar" />
        <div className={css.userProfile}>
          <p className={css.userName}>{name}</p>
          <p className={css.userText}>@{tag}</p>
          <p className={css.userText}>{location}</p>
        </div>

        <ul className={css.userStats}>
          <li className={css.userStatsList}>
            <span>Followers</span>
            <span className={css.userListBold}>{followers}</span>
          </li>
          <li className={css.userStatsList}>
            <span>Views</span>
            <span className={css.userListBold}>{views}</span>
          </li>
          <li className={css.userStatsList}>
            <span>Likes</span>
            <span className={css.userListBold}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
