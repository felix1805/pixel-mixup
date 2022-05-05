// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import BlankCanvas from '../components/Canvas/index';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  const renderUserList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <UserList users={users} title="List of Users" />
    }
  } 

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  const renderBlankCanvas = () => {
    return (
      <BlankCanvas />
    )
  }

  return (
    <main>
      <div>
        {renderUsername()}
      </div>
      <div>
        {renderUserList()}
      </div>
      <div>
        {renderBlankCanvas()}
      </div>
    </main>
  );
};

export default Home;
