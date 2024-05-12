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
            <span>{followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
