import React from 'react';
import './Adminusercard.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const AdminUserCard = ({ user, onClick }) => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    

    const handleMakeAdmin = async (userId) => {
        try {
            console.log(`user id : ${userId}`)
            console.log('access: ', accessToken)
            const response = await axios.put(`http://127.0.0.1:5000/summary/make-admin/${userId}`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });
            console.log('User has been made admin');              
            window.location.reload();    
            alert('User has been made admin successfully.');
          
        } catch (error) {
            console.error('Error making user admin:', error);
            
        }
    };

    const handleRemoveAdmin = async (userId) => {
        try {
            const response = await axios.put(`http://127.0.0.1:5000/summary/remove-admin/${userId}`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });
            console.log('Admin status removed successfully');
            window.location.reload();    
            alert('Admin status has been removed successfully.');
           
        } catch (error) {
            console.error('Error removing admin status:', error);
           
        }
    };


    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/summary/users/${userId}`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });
            console.log('User deleted successfully');
            window.location.reload();    
            alert('User has been deleted successfully.');

        } catch (error) {
            console.error('Error deleting user:', error);

        }
    };
    const handleDeleteUser = async () => {
        if (window.confirm(`Are you sure you want to delete this user?  ${user.first_name} ${user.last_name}`)) {
            try {
                await deleteUser(user.id);
            } catch (error) {
                console.error('Error deleting user:', error);
                
            }
        }
    };

    return (
        <div className='user-card' onClick={onClick}>
            <div>
                Name: {user.first_name}  {user.last_name}
            </div>
            <div>
                Email: {user.email}
            </div>
            <div>
                Phone: {user.phoneNumber}
            </div>
            <div>
                National ID: {user.national_ID}
            </div>
            <div>
                Balance: Ksh/- {user.balance.toLocaleString()}
            </div>

            {
                user.is_admin ?
                    <button className='remove-admin' onClick={() => handleRemoveAdmin(user.id)}>Remove Admin</button> :
                    <button className='make-admin' onClick={() => handleMakeAdmin(user.id)}>Make Admin</button>
            }
            <button className='danger' onClick={handleDeleteUser}>Delete</button>


        </div>
    );
}

export default AdminUserCard;
