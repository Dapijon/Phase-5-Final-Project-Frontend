import React from 'react';
import './Adminusercard.css'

const AdminUserCard = ({ user }) => {
    console.log(user)
    const handleMakeAdmin = (email) => {
        console.log(email);
    }
    const handleDeleteUser = (email) => {
        console.log(email)
    }
    return (
        <div className='user-card'>
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

            <button className='make-admin' onClick={()=>handleMakeAdmin(user.email)}>Make Admin</button>
            <button className='danger' onClick={()=>handleDeleteUser(user.email)}>Delete</button>


        </div>
    );
}

export default AdminUserCard;
