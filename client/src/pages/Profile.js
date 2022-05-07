// Node Modules
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_USER, QUERY_ME, QUERY_CANVASES } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import CanvasForm from '../components/CanvasForm';
import CanvasList from '../components/CanvasList/index';
import { FallingLines } from 'react-loader-spinner';


const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });
  const { loading: canvasLoading , data: canvasData } = useQuery(QUERY_CANVASES)

  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};
  const users = usersData?.users || [];
  const canvases = canvasData?.canvases || [];

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/" replace />;
  }

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <FallingLines width="110" color="#c8553d" />;
  }

  const renderUserList = () => {
    if (usersLoading) return null;
    // Only renders users who's profile we're not currently viewing
    const notMeUsers = users.filter(o => o._id !== user._id);
    return <UserList users={notMeUsers} title="User List" />;
  };

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <ul>
        <li>username: {user.username}</li>
        <li>email: {user.email}</li>
      </ul>
    );
  }

  const renderCanvasForm = () => {
    return <CanvasForm />
  }

  const renderCanvasList = () => {
    if (loading || canvasLoading) {
      return <h2>Loading...</h2>
    } else {
      return <CanvasList canvases={canvases} title="List of Canvases" />
    }
  } 

  return (
    <div>
      <div>
        <h2>
          Viewing {id ? `${user.username}'s` : 'your'} profile.
        </h2>
        {renderCurrentUserInfo()}
        <div>
        {renderUserList()}
        </div>
      </div>
      <div>
        {renderCanvasForm()}
      </div>
      <div>
        {renderCanvasList()}
      </div>
    </div>
  );
};

export default Profile;
