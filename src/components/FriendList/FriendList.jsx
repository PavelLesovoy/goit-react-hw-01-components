import PropTypes, { shape } from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => {
      return <FriendListItem friend={friend} key={friend.id} />;
    })}
  </ul>
);

FriendList.propType = {
  friends: PropTypes.arrayOf(shape).isRequired,
};
