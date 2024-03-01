import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectAllUsers, selectUsersLoading, selectUsersError } from '../../app/allUsers.slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminUserCard from './Admin-User-card';
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from "react-router-dom";

import './Admin.css';

const Admin = () => {

  const accessToken = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();
  const decodedToken = accessToken ? jwtDecode(accessToken) : null;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allusers.users);
  const loading = useSelector((state) => state.allusers.loading);
  const error = useSelector((state) => state.allusers.error);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const usersPerPage = 8;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCardClick = (user) => {
    toast.info(`User: ${user.first_name} ${user.last_name}, Transaction Details: ...`);
  };
    
  if (decodedToken && !decodedToken.is_admin) {
    return navigate("/unauthorized" );
}

  return (
    <>
      <div className="admin">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="view">
          <div className="admin-pg">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {currentUsers.map((user, i) => (
              <AdminUserCard user={user} key={i} onClick={() => handleCardClick(user)} />
            ))}
          </div>
          <div className="pagination">
            {filteredUsers.length > usersPerPage &&
              [...Array(Math.ceil(filteredUsers.length / usersPerPage))].map((_, i) => (
                <button key={i} onClick={() => paginate(i + 1)}>
                  {i + 1}
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
