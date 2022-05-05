import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  users: {
    display: 'flex',
    flexDirection: 'column',
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
  if (!users.length) return <h3 class="aside">No Users</h3>;

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
