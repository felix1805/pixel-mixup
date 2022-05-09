// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_CANVASES } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import Canvas from '../components/Canvas/index';
import CanvasList from '../components/CanvasList/index';


const Home = () => {

  const { loading, data } = useQuery(QUERY_USERS);
  const { loading: canvasLoading, data: canvasData } = useQuery(QUERY_CANVASES);
  const users = data?.users || [];
  const canvases = canvasData?.canvases || [];

  const renderUserList = () => {
    if (loading || canvasLoading) {
      return <h2>Loading...</h2>
    } else {
      return <UserList users={users} title="List of Users" />
    }
  }

  const renderCanvasList = () => {
    if (loading || canvasLoading) {
      return <h2>Loading...</h2>
    } else {
      return <CanvasList canvases={canvases} title="List of Canvases" />
    }
  }

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  const renderCanvas = () => {
    return (
      <Canvas />
    )
  }

  return (
    <main>
      <div>
        <h3 className='userName'>
          {renderUsername()}
        </h3>
        <div className='hidden'>
          {renderUserList()}
        </div>
        <div className='hidden'>
          {renderCanvasList()}
        </div>
      </div>
      <div>
        {renderCanvas()}
      </div>
    </main>
  );
};

export default Home;
