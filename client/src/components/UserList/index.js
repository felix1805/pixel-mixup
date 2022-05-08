import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  users: {
    display: 'flex',
    flexDirection: 'row',
  }
}

const User = ({ _id, username }) => {
  return (
    <div key={_id} style={styles.users}>
      <h4>
        <Link to={`/users/${_id}`}>
          {username}
        </Link>
      </h4>
    </div>
  );
};

const UserList = ({ users, title }) => {
  if (!users.length) return <h3 className="aside">You're the First User! Congratulations!</h3>;

  const renderUsers = () => {
    if (!users) return null;
    return users.map(user => <User key={user._id} {...user} />);
  }

  return (
    <div style={styles.users}>
      <h3>{title}</h3>
      {renderUsers()}
    </div>
  );
};

export default UserList;
