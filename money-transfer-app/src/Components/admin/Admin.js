import React, { useState } from 'react'
import AdminUserCard from './Admin-User-card'

import './Admin.css'

const Admin = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 8;
    const users = [
        {
            "first_name": "John",
            "last_name": "Doe",
            "dob": "1990-01-01",
            "email": "john.doe@example.com",
            "national_ID": "123456789",
            "phoneNumber": "1234567890",
            "password": "password123",
            "transaction_password": 123456,
            "balance": 24684
        },
        {
            "first_name": "Alice",
            "last_name": "Smith",
            "dob": "1985-05-15",
            "email": "alice.smith@example.com",
            "national_ID": "987654321",
            "phoneNumber": "9876543210",
            "password": "pass123",
            "transaction_password": 654321,
            "balance": 50421
        },
        {
            "first_name": "Bob",
            "last_name": "Johnson",
            "dob": "1978-11-30",
            "email": "bob.johnson@example.com",
            "national_ID": "246813579",
            "phoneNumber": "2468135790",
            "password": "bob123",
            "transaction_password": 987654,
            "balance": 41388
        },
        {
            "first_name": "Emma",
            "last_name": "Brown",
            "dob": "1982-08-20",
            "email": "emma.brown@example.com",
            "national_ID": "135792468",
            "phoneNumber": "1357924680",
            "password": "emma456",
            "transaction_password": 456789,
            "balance": 19070
        },
        {
            "first_name": "Michael",
            "last_name": "Davis",
            "dob": "1995-03-25",
            "email": "michael.davis@example.com",
            "national_ID": "369258147",
            "phoneNumber": "3692581470",
            "password": "mike789",
            "transaction_password": 789012,
            "balance": 92458
        },
        {
            "first_name": "Sophia",
            "last_name": "Wilson",
            "dob": "1989-12-10",
            "email": "sophia.wilson@example.com",
            "national_ID": "582714936",
            "phoneNumber": "5827149360",
            "password": "sophia12",
            "transaction_password": 345678,
            "balance": 41291
        },
        {
            "first_name": "Matthew",
            "last_name": "Martinez",
            "dob": "1980-07-05",
            "email": "matthew.martinez@example.com",
            "national_ID": "951753824",
            "phoneNumber": "9517538240",
            "password": "matt345",
            "transaction_password": 123789,
            "balance": 43202
        },
        {
            "first_name": "Olivia",
            "last_name": "Taylor",
            "dob": "1993-09-18",
            "email": "olivia.taylor@example.com",
            "national_ID": "753159824",
            "phoneNumber": "7531598240",
            "password": "olivia789",
            "transaction_password": 987123,
            "balance": 27846
        },
        {
            "first_name": "William",
            "last_name": "Clark",
            "dob": "1987-06-12",
            "email": "william.clark@example.com",
            "national_ID": "852963741",
            "phoneNumber": "8529637410",
            "password": "william23",
            "transaction_password": 456123,
            "balance": 89125
        },
        {
            "first_name": "Ava",
            "last_name": "Miller",
            "dob": "1997-02-28",
            "email": "ava.miller@example.com",
            "national_ID": "369147258",
            "phoneNumber": "3691472580",
            "password": "ava456",
            "transaction_password": 789456,
            "balance": 73746
        }
    ]

    const filteredUsers = users.filter(user => {
        const fullName = `${user.first_name} ${user.last_name}`;
        return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);


    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <> <div className='admin'>
            <div className='search-bar'>
                <input
                    type='text'
                    placeholder='Search users...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className='admin-pg'>
                {
                    currentUsers.map((user, i) => (
                        <AdminUserCard user={user} key={i} />
                    ))
                }
            </div>
            <div className='pagination'>
                {/* Pagination buttons */}
                {filteredUsers.length > usersPerPage &&
                    [...Array(Math.ceil(filteredUsers.length / usersPerPage))].map((_, i) => (
                        <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
                    ))
                }
            </div>
           </div>

        </>
    )
}

export default Admin
