// Node Modules
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USER, QUERY_ME, QUERY_CANVASES } from '../utils/queries';
// Components
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

  const user = data?.me || data?.user || {};
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

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <div className='centered-vert'>
        <p>email: {user.email}</p>
      </div>
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
    <div className='centered-vert info-cont'>
      <div id='acct'>
        <h2 className='centered-vert'>

          {`${user.username}'s`} Studio
        </h2>
        {renderCurrentUserInfo()}
        {/* <div>
        {renderUserList()}
        </div> */}
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
