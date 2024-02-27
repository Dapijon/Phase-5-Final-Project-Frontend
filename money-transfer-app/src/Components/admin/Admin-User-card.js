import React from 'react';
import './Adminusercard.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const AdminUserCard = ({ user, onClick }) => {

    const handleMakeAdmin = async (userId) => {
        try {
            console.log(`user id : ${userId}`)
            const response = await axios.put(`http://127.0.0.1:5000/summary/make-admin/${userId}`);
            console.log('User has been made admin');
          
        } catch (error) {
            console.error('Error making user admin:', error);
            
        }
    };

    const handleRemoveAdmin = async (userId) => {
        try {
            const response = await axios.put(`http://127.0.0.1:5000/summary/remove-admin/${userId}`);
            console.log('Admin status removed successfully');
           
        } catch (error) {
            console.error('Error removing admin status:', error);
           
        }
    };


    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/summary/users/${userId}`);
            console.log('User deleted successfully');

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
                    <button className='remove-admin' onClick={() => handleMakeAdmin(user.id)}>Remove Admin</button> :
                    <button className='make-admin' onClick={() => handleRemoveAdmin(user.id)}>Make Admin</button>
            }
            <button className='danger' onClick={handleDeleteUser}>Delete</button>


        </div>
    );
}

export default AdminUserCard;
