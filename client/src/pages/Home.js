// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_CANVASES } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import BlankCanvas from '../components/Canvas/index';
import CanvasList from '../components/CanvasList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const { loading: canvasLoading , data: canvasData } = useQuery(QUERY_CANVASES);
  const users = data?.users || [];
  const canvases = data?.canvasData || [];

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

  // const renderCanvasList = () => {
  //   if (loading || canvasLoading) {
  //     return <h2>Loading...</h2>
  //   } else {
  //     return (
  //       <ul>
  //         {canvases.map(canvas => (
  //           <li>
  //             <Link to={`/canvas/${canvas._id}`}>
  //               {canvas.name}
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     )
  //   }
  // }

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
        <h3>Canvases</h3>
        {renderCanvasList()}
      </div>
      <div>
        {renderBlankCanvas()}
      </div>
    </main>
  );
};

export default Home;
