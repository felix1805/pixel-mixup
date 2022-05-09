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
    <div className="user-cont" key={_id}>
      <h4 class="align">
        <Link className="btn-1 user-btn" to={`/users/${_id}`}>
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
    <div>
      <h3 className="aside">{title}</h3>
      {renderUsers()}
    </div>
  );
};

export default UserList;
